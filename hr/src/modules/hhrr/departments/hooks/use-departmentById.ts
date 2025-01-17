import { useTable } from 'modules/core/hooks/use-table'
import { CreateDepartment } from '../shared/Department'
import {  createDepartment } from '../services/departments'
import {DEPARTMENT_KEY } from '../consts/queryKeys'
import { getDepartmentById } from '../services/departmentById'
import {usePositionContext} from "modules/hhrr/positions/epmloyees/context/PositionSelectedId";



export const useDepartmentById = () => {
    const {departmentId} = usePositionContext()
    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
        key: DEPARTMENT_KEY,
        fetcher:(searchParams)=> {
            return getDepartmentById(searchParams,departmentId)
        },
        mutationFn: createDepartment
    })

    //EXECUTED IN A ONSUBMIT FORM DIALOG EVENT
    const onCreateDepartment = async (createDepartment: CreateDepartment) => {
        mutate(createDepartment)
    }

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onCreateDepartment,
    }
}
