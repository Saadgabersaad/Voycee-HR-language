import { useTable } from 'modules/core/hooks/use-table'
import {CreateEmployee} from "modules/hhrr/employees/shared/Employee";
import {createEmployee, getEmployee} from "modules/hhrr/employees/profile/services/employee";
import {EMPLOYEE_KEY} from "modules/hhrr/employees/profile/consts/queryKeys";

export const useEmployee = () => {
    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
        key: EMPLOYEE_KEY,
        fetcher: getEmployee,
        mutationFn:createEmployee,
    })

    const onCreateEmployee = async (createEmployee: CreateEmployee) => {
        mutate(createEmployee)
    }

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onCreateEmployee,
    }
}
