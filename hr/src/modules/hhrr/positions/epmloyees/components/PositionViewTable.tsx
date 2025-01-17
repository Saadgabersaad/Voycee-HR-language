import {Button, TableCell } from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from '@/modules/core/components/tables/EnhancedTable'
import { headCells } from '@/modules/hhrr/positions/epmloyees/consts/headCell'
import { PositionEmployee} from "@/modules/hhrr/departments/shared/Position";
import {useEmployeesPosition} from "@/modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
type Department = {
    name: string;
};

type TableProps = Partial<EnhancedTableProps<PositionEmployee>> & {
    department: Department|any;
};

export const Table =({ department }: TableProps) => {

    const { data, isLoading } = useEmployeesPosition();
    const rows=data.data
    const loading=isLoading

    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            headCells={headCells}
            showCheckBox={true}
            onPageChange={() => { }}
            render={(row) => {
                return <>
                    <TableCell >
                        {row?.name} {row?.lastName}
                    </TableCell>
                    <TableCell>
                        {row?.email}
                    </TableCell>
                    <TableCell>
                        {department?.name}
                    </TableCell>

                    <TableCell width={300}>
                        <Button sx={{bgcolor: "#ff6363"}} variant="contained">Unassign</Button>

                    </TableCell>

                </>;
            }}       />
    )
}
