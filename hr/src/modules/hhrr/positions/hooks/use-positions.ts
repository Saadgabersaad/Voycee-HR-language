import { useTable } from '@/modules/core/hooks/use-table'
import {CreatePosition} from "../shared/Position";
import {createPosition, getPositions} from "../services/positions";
import {POSITIONS_KEY} from "../consts/queryKeys";


export const usePositions = () => {
    const { data, isLoading, isError, mutate, isFetching,   onSearch } = useTable({
        key: POSITIONS_KEY,
        fetcher: getPositions,
        mutationFn: createPosition,
    })

    //EXECUTED IN A ONSUBMIT FORM DIALOG EVENT
    const onCreatePosition = async (createPosition: CreatePosition) => {
        mutate(createPosition)
    }

    return {
        data: data?.data ?? [],
        isLoading,
        isError,
        onSearch,
        onCreatePosition,
    }
}
