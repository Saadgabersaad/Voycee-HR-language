import { useState, useEffect } from 'react'
import { SearchParams } from '../utlis/types'

export function useDebounce(queryParams: SearchParams, delay?: number) {

    const [params, setParams] = useState(queryParams)
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (typeof queryParams.search !== 'string') return
        setIsTyping(true)

        // Set a timeout to update the debounced value
        const handler = setTimeout(() => {
            setParams((p) => ({
                ...p,
                search: queryParams.search
            }))
            setIsTyping(false)
        }, delay || 600)

        return () => {
            clearTimeout(handler);
        };
    }, [queryParams.search, delay])

    const onChangeParams = (param: Partial<SearchParams>) => {
        setParams(p => ({...p, ...param }))
    }

    return {
        query: params,
        onChangeParams,
        isTyping,
    }
}
