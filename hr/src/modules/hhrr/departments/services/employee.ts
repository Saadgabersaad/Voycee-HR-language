import { api, HttpMethod } from 'modules/core/utils/api'
import { Employee } from 'modules/hhrr/employees/shared/Employee'

export const addEmployeeToDepartment = (employeeId: string) => {
  return api(HttpMethod.PUT, `employees/${employeeId}/add-employee`)	
}

export const assignEmployeeToPosition = (employeeId: string, positionId: string) => {
  return api(HttpMethod.PUT, `/employees/${employeeId}/position`, {
    positionId
  })
}

export const deleteEmployee = (employeeId: string) => {
  return api(HttpMethod.DELETE, `/employees/${employeeId}`)
}

export const getEmployeesByPosition = (positionId: String) => {
  return api<Employee[]>(HttpMethod.GET, `/employees?position=${positionId}`)
}