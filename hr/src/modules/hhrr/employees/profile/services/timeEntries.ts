import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
import {CreateEmployee} from "modules/hhrr/employees/shared/Employee";

const defaultStartTime = '2024-12-01T00:00:00Z';
const defaultEndTime = '2025-12-09T23:59:59Z';

/**
 * Fetch time entries for an employee with optional search parameters and time range.
 */
export const getTimeEntries = (
    search?: SearchParams,
    employeeId?: string | null,
    startTime: string = defaultStartTime,
    endTime: string = defaultEndTime
) => {
    const queryParams = new URLSearchParams();
    queryParams.append('employeesIds', employeeId ?? '');
    queryParams.append('startTime', startTime);
    queryParams.append('endTime', endTime);

    if (search?.query) {
        queryParams.append('search', search.query);
    }

    return api<any[]>(HttpMethod.GET, `/time-entries?${queryParams.toString()}`);
};

/**
 * Create a new employee.
 */
export const createEmployee = (newEmployee: CreateEmployee) => {
    return api<any[]>(HttpMethod.POST, `/employees`, newEmployee);
};
