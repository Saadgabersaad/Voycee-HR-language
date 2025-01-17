import { api, HttpMethod } from 'modules/core/utils/api'
import { CreateDepartment, Department } from '../shared/Department'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import { Position } from '../shared/Position'

export const getDepartments = (query?: string) => {
  return api<Department[]>(HttpMethod.GET, `/departments${query?.length ? query + '&': '?'}sortByOrder=asc&sortByField=created_at`)
}

export const createDepartment = (department: CreateDepartment) => {
  return api<Department[]>(HttpMethod.POST, `/departments`, department)
}

export const getEmployeesByDepartment = async (departmentId: string) => {
  return api<Employee[]>(HttpMethod.GET, `/employees?department=${departmentId}`)
}

export const getDepartment = (id: string) => {
  return api<Department>(HttpMethod.GET, `/departments/${id}`)
}

export const searchEmployees = async (search?: string) => {
  const queryParam = search ? `&search=${search}` : ''
  return api<Employee[]>(HttpMethod.GET, `/employees?search=${queryParam}`)
}

export const getPositionsByDepartment = async (departmentId: string) => {
  return api<Position[]>(HttpMethod.GET, `/positions/?department=${departmentId}`)
}

export const deleteDepartment = (departmentId: string) => {
  return api<any>(HttpMethod.DELETE, `/departments/${departmentId}`)
}