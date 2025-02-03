import { useTable } from '@/modules/core/hooks/use-table'
import { CreateDepartment } from '../shared/Department'
import { getDepartments, createDepartment } from '../services/departments'
import { DEPARTMENTS_KEY } from '../consts/queryKeys'

export const useDepartments = () => {
  const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
    key: DEPARTMENTS_KEY,
    fetcher: getDepartments,
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
