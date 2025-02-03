import React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import { headCells } from '@/modules/hhrr/employees/consts/headCell';
import StatusMenu from "@/modules/hhrr/employees/components/StatusMenu";
import EnhancedTableToolbar from "@/modules/hhrr/employees/components/TableSelection";
import DottedMenu from "@/modules/hhrr/employees/components/DottedMenu";
import { Employee } from '../shared/Employee';
import { EnhancedTable } from '@/modules/core/components/tables/EnhancedTable';

type Props = {
    rows: Employee[]
    isLoading: boolean
    onSearch(search: string): void
    filterByDepartment(value: string): void
}

export default function Employees({
    rows,
    onSearch,
    isLoading,
    filterByDepartment
}: Props) {
    const [selected, setSelected] = React.useState<readonly number[]>([])

    return (
        <Box sx={{ bgcolor: 'grey.100', marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <EnhancedTableToolbar
                tableSearch={true}
                onSearch={onSearch}
                numSelected={selected.length}
                filterByDepartment={filterByDepartment}
                setPositionFilter={() => {}}
                setStatusFilter={() => {}}
            />
            <EnhancedTable
                rows={rows}
                showCheckBox={true}
                rowsPerPageCount={4}
                render={(row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const isInactive = row.status === 'Inactive';
                    const textColorStyle = isInactive ? { color: 'lightgray' } : {};

                    const handleStatusChange = (newStatus: string) => {
                        console.log(`Row ${row.id} status updated to ${newStatus}`);
                    }

                    return <>
                        <TableCell sx={textColorStyle} component="th" id={labelId} scope="row" padding="none">
                            {row.name} {row.lastName}
                        </TableCell>
                        <TableCell sx={textColorStyle} padding="none">{row?.position?.name}</TableCell>
                        <TableCell sx={textColorStyle} padding="none">{row.email}</TableCell>
                        <TableCell sx={textColorStyle} padding="none">
                            <StatusMenu status={row.status} onStatusChange={handleStatusChange} />
                        </TableCell>
                        <TableCell padding="none">
                            <DottedMenu employee={row} />
                        </TableCell>
                    </>
                }}

                headCells={headCells}
                loading={isLoading}
                onPageChange={function (newPage: number): void {
                }}
            />
        </Box>
    );
}
