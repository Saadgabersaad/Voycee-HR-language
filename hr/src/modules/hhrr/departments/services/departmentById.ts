import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
export const getDepartmentById = (search?: string, departmentId?: string | null) => {
    console.log(search, 'wfwfew')

    const departmentQueryParam = search?.length ? `&search=${encodeURIComponent(search)}` : '';
    const queryParam = departmentId ? `${departmentId}${departmentQueryParam}` : departmentQueryParam;
    return api<any[]>(HttpMethod.GET, `/departments/${queryParam}`);
};
