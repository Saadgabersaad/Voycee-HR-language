import * as React from "react";
import { TableCell } from '@mui/material';
import { EnhancedTable, EnhancedTableProps } from '@/modules/core/components/tables/EnhancedTable';
import { DeleteHeadCells } from "@/modules/hhrr/positions/epmloyees/consts/headCell";
import { PositionsSelectRow } from "./AssignPosition";
import {PositionEmployees} from "@/modules/hhrr/positions/epmloyees/shared/positionEmployees";
import { Employee } from '@/modules/hhrr/employees/shared/Employee';


interface DeletePositionTableProps {
    rows?: Employee[];
    loading?: boolean
    positions?: PositionEmployees[];
}

export const DeletePositionTable: React.FC<DeletePositionTableProps> = ({ rows, loading, positions }) => {
    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            showCheckBox={true}
            headCells={DeleteHeadCells}
            onPageChange={() => {
            }}
            render={(row) => {
                return (
                    <>
                        <TableCell>{row.name} {row.lastName}</TableCell>
                        <PositionsSelectRow employeeId={row.id} positions={positions}/>
                    </>
                );
            }}
                  />
    );
};
