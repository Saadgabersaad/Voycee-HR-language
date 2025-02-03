import { useTable } from '@/modules/core/hooks/use-table'
import { getEmployees } from '../services/employees'
import { EMPLOYEES } from '../consts/queryKeys';
import { CreateEmployee, Employee } from '../shared/Employee';

export const useEmployees = () => {
  const { data, onSearch, isLoading, setQuery } = useTable<Employee[], CreateEmployee>({
    fetcher: getEmployees,
    key: EMPLOYEES,
    mutationFn: async (data: CreateEmployee) => {
      return new Promise<void>((resolve) => {
        resolve();
      });
    }
  })

  const filterByDepartment = (departmentId: string) => {
    setQuery({ department: [departmentId] })
  }

  return { data, isLoading, onSearch, filterByDepartment }
}
