import { HeadCell } from 'modules/core/consts/tableHead'

export const headCells: HeadCell[] = [
    {id: 'id', numeric: false, disablePadding: true, label: 'ID',},
    {id: 'name', numeric: false, disablePadding: false, label: 'Name',},
    { id: 'departmentId', numeric: false, disablePadding: false, label: 'Related Department' },
    { id: 'employeeCount', numeric: false, disablePadding: false, label: 'Number of Employees Assigned' },
    { id: 'dottedMenu', numeric: false, disablePadding: false, label: '' },
]
