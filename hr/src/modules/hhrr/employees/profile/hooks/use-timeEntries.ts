import { useTable } from 'modules/core/hooks/use-table'
import {CreateEmployee} from "modules/hhrr/employees/shared/Employee";
import {EMPLOYEE_KEY} from "modules/hhrr/employees/consts/queryKeys";
import { getTimeEntries } from 'modules/hhrr/employees/profile/services/timeEntries';
import {createEmployee} from "modules/hhrr/employees/profile/services/employee";

export const useTimeEntries = () => {
    const id='cm489st080002bf0rp2ld1uxf'
    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({

        key: EMPLOYEE_KEY,
        fetcher:(searchParams)=> getTimeEntries(searchParams,id),
        mutationFn:createEmployee,
    })
    console.log(data)
    console.log(data)
    console.log(data)
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
