import { useTable } from '@/modules/core/hooks/use-table';
import { changePositionName, getPositionById } from '@/modules/hhrr/positions/epmloyees/services/positionEmployees';
import { POSITION_NAME_KEY } from '@/modules/hhrr/positions/consts/queryKeys';
import { usePositionContext } from '@/modules/hhrr/positions/epmloyees/context/PositionSelectedId';
import { ChangePositionName } from '@/modules/hhrr/positions/shared/Position';
export const useChangePositionName = () => {
    const { id } = usePositionContext();
    const {data, isLoading, isError, mutate, isFetching, onSearch,} = useTable({
        key: POSITION_NAME_KEY,
        fetcher: (search?: string) => getPositionById(search, id),
        mutationFn: (payload: ChangePositionName) => changePositionName(id!, payload),
    });


    const onChangePositionName = async (payload: ChangePositionName) => {
        try {
            await mutate(payload);
        } catch (error) {
            console.error('Error changing position name:', error);
        }
    };


    return {
        data: data?.data ?? [],
        isError,
        isLoading,
        isFetching,
        onSearch,
        onChangePositionName,
    };
};
