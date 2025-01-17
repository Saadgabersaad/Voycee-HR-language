import { useTable } from '@/modules/core/hooks/use-table';
import { assignPositionToEmployee, deletePosition, getPositionsEmployees } from "@/modules/hhrr/positions/epmloyees/services/positionEmployees";
import { Employees_KEY } from "@/modules/hhrr/positions/consts/queryKeys";
import { usePositionContext } from "@/modules/hhrr/positions/epmloyees/context/PositionSelectedId";
import {SearchParams} from "@/modules/core/utlis/types";

interface AssignPositionPayload {
    employeeId: string;
    payload: {
        positionId: string;
    };
}

export const useEmployeesPosition = () => {
    const { id } = usePositionContext();

    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
        key: Employees_KEY,
        fetcher: (searchParams:SearchParams) => getPositionsEmployees(searchParams, id),
        mutationFn: (positionData:any) => assignPositionToEmployee(positionData),
    });

    const onAssignPositionToEmployee = async (employeeId: string, selectedId: string) => {
        const payload = {positionId: selectedId};
        try {
            mutate({ employeeId, payload });
        } catch (error) {
            console.error("Failed to assign position:", error);
        }
    };
    const onDeletePosition =  (id: string) => {
        try {
             deletePosition(id);
            console.log(`Position ${id} deleted successfully`);
        } catch (error) {
            console.error(`Failed to delete position ${id}:`, error);
        }
    };

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onAssignPositionToEmployee,
        onDeletePosition
    };
};
