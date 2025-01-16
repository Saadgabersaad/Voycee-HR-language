import toast from 'react-hot-toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SearchParams } from '../utlis/types'
import { useDebounce } from './use-debounce'
import { useState } from 'react'
import { ApiResponse } from '../utlis/api'

type UseTableProps<T, TRequestBody> = {
    fetcher: (queryParams?: string) => Promise<ApiResponse<T>>
    searchParams?: SearchParams
    mutationFn(data: TRequestBody): Promise<any> //FOR POST
    key: string
}

export const useTable = <T, TRequestBody>({
                                              mutationFn,
                                              fetcher,
                                              key
                                          }: UseTableProps<T, TRequestBody>) => {
    const queryClient = useQueryClient()

    const [queryParams, setQueryState] = useState<SearchParams>({})
    const { query, isTyping, onChangeParams }= useDebounce(queryParams, 600)


    const buildQueryParams = (params: SearchParams) => {
        if (!params) return ''
        if (!Object.keys(params)?.length) return '';
        const queryEntries = Object.entries(params)
            .filter(([, value]) => value !== undefined && value !== '') // Ignora valores nulos o vacíos
            .flatMap(([key, value]) => {
                // Si el valor es un string separado por comas, crea múltiples entradas
                if (typeof value === 'string' && value.includes(',')) {
                    return value
                        .split(',')
                        .map((val) => `${key}=${encodeURIComponent(val.trim())}`);
                }
                // Si no, simplemente codifica la clave y el valor
                return `${key}=${encodeURIComponent(value as string)}`;
            });

        return queryEntries.length > 0 ? `?${queryEntries.join('&')}` : '';
    }



    //GET
    const { data, isLoading, isError, isFetching } = useQuery({
        queryFn: async () => {
            const queryParams = buildQueryParams(query)
            return await fetcher(queryParams)
        },
        queryKey: [key, query],
    })
    //POST
    const { mutate } = useMutation({
        mutationFn: async (data: TRequestBody) => {
            return toast.promise(mutationFn(data), {
                loading: 'Saving...',
                success: 'Saved successfully',
                error: 'Error, contact IT'
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [key] })
        }
    })

    const onSearch = (value: string) => {
        setQueryState((qp) => ({...qp, search: value }))
    }

    const setQuery = (params: Partial<SearchParams>) => {
        onChangeParams(params)
    }

    return {
        data: (data ?? []) as ApiResponse<T>,
        isLoading: isLoading || isTyping,
        isFetching,
        setQuery,
        isError,
        onSearch,
        mutate,
    }
}
