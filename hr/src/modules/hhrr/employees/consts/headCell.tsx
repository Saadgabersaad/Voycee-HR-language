import { HeadCell } from 'modules/core/consts/tableHead'

export const headCells : HeadCell[] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'position', numeric: false, disablePadding: false, label: 'Position' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'menu', numeric: false, disablePadding: false, label: '' },
];
