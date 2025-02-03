// "use client"
// import {Box, Paper, TableCell} from '@mui/material'
// import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
// import {headCells} from '../../employees/consts/headCell'
// import {Position} from "modules/hhrr/departments/shared/Position";
// import PersonIcon from "@mui/icons-material/Person";
// import WorkIcon from "@mui/icons-material/Work";
// import DeleteIcon from "@mui/icons-material/Delete";
// import * as React from "react";
// import DottedMenu from 'modules/hhrr/employees/components/DottedMenu';
// import { Employees} from "modules/hhrr/employees/shared/Employee";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import EditIcon from "@mui/icons-material/Edit";
// import StatusMenu from "modules/hhrr/employees/components/StatusMenu";
// import EnhancedTableToolbar from "modules/hhrr/employees/components/TableSelection";
// import {Data, Order, rows} from "modules/core/consts/tableHead";
// import {useState} from "react";
// import {getComparator} from "modules/core/utils/tableUtlis";
//
// export const Table = ({
//                           rows,
//                           loading
//                       }: Partial<EnhancedTableProps<Employees>>) => {
//     const [order, setOrder] = React.useState<Order>('asc');
//     const [orderBy, setOrderBy] = React.useState<keyof Data>('position');
//     const [selected, setSelected] = React.useState<readonly number[]>([]);
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);
//
//
//     const handleClick = (id: string | null, departmentId: string | null) => {
//
//     }
//
//     const employeesOptions = [
//         { label: 'View Employee Profile', icon: <PersonIcon color="primary" /> },
//         { label: 'Change Employee Position', icon: <WorkIcon color="primary" /> },
//         { label: 'Change Employee Department', icon: <ApartmentIcon color="primary" /> },
//         { label: 'Edit Employee', icon: <EditIcon color="primary" /> },
//         { label: 'Delete Employee', icon: <DeleteIcon sx={{ color: 'red' }} /> },
//     ];
//
//
//     const [positionFilter, setPositionFilter] = useState('');
//     const [statusFilter, setStatusFilter] = useState('');
//
//
//
//     const visibleRows = React.useMemo(() => {
//         const filteredRows = rows.filter((row) => {
//             return (
//                 (!positionFilter || row.position === positionFilter) &&
//                 (!statusFilter || row.status === statusFilter)
//             );
//         });
//
//         const sortedRows = filteredRows.sort(getComparator(order, orderBy));
//
//         return sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
//     }, [rows, positionFilter, statusFilter, order, orderBy, page, rowsPerPage]);
//
//
//     return (
//         <Box sx={{ bgcolor: 'grey.100', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
//             <EnhancedTableToolbar tableSearch={true}
//                                   numSelected={selected.length}
//                                   setPositionFilter={setPositionFilter}
//                                   setStatusFilter={setStatusFilter}
//             />
//             <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTable
//             rows={rows!}
//             loading={loading!}
//             headCells={headCells}
//             onPageChange={() => { }}
//             render={(row) => {
//                 const isInactive = row.status === 'Inactive';
//                 const textColorStyle = isInactive ? { color: 'lightgray' } : {};
//
//                 const handleStatusChange = (newStatus: string) => {
//                     row.status = newStatus;
//                     console.log(`Row ${row.id} status updated to ${newStatus}`);
//                 };
//                 return <>
//                     <TableCell sx={{textColorStyle}} padding="none">
//                         {row.id}
//                     </TableCell>
//                     <TableCell sx={{textColorStyle}} padding="none">
//                         {row.name}
//                     </TableCell>
//                     <TableCell  sx={{textColorStyle}} padding="none">
//                         {row.phone}
//                     </TableCell>
//                     <TableCell  sx={{textColorStyle}} padding="none">
//                         {row.email}
//                     </TableCell>
//                     <TableCell  sx={{textColorStyle}} padding="none">
//                         {row.position?.department_id}
//                     </TableCell>
//                     <TableCell  sx={{textColorStyle}} padding="none">
//                         <StatusMenu status={row.status} onStatusChange={handleStatusChange} />
//                     </TableCell>
//                     <TableCell  onClick={()=>handleClick(row.id,row.departmentId)}  >
//                         <DottedMenu
//                             name={row.name}
//                             options={employeesOptions}
//                             // mainModal={<DeletePosition  positions={rows} positionName={row.name}  count={row.employeeCount}  />}
//                             // NameModal={<ChangePositionName positions={rows}/>}
//                             // EmployeeId={''}
//                         />
//                     </TableCell>
//                 </>
//             }}
//         />
//                 </Paper>
//             </Box>
//     )
// }
