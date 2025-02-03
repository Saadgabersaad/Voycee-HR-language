import {api, HttpMethod } from '@/modules/core/utlis/api'
import { CreateEmployee, Employee } from '../shared/Employee'

export function getEmployees(queryParams?: string) {
  return api<Employee[]>(HttpMethod.GET, `/employees${queryParams}`)
}
export const createEmployee = (employee: CreateEmployee) => {
  return api(HttpMethod.POST, `/employees`, employee)
}