import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';

import {Position} from "modules/hhrr/departments/shared/Position";
import {CreateEmployee} from "modules/hhrr/employees/shared/Employee";

export const getEmployee = (search?: SearchParams | undefined, employeeId?: string | null) => {

employeeId = 'cm489st080002bf0rp2ld1uxf'
    const employeeQueryParam= search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = employeeId ? `?=${employeeId}${employeeQueryParam}` : '';
    return api<any[]>(HttpMethod.GET, `/employees/cm489st080002bf0rp2ld1uxf`);
};


export const createEmployee = (employee: CreateEmployee) => {
    return api<Position[]>(HttpMethod.POST, `/employees`, employee)
}
