"use client"
import { TableCell} from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../../positions/consts/headCell'
import {Position} from "modules/hhrr/departments/shared/Position";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import DottedMenu from 'modules/hhrr/employees/components/DottedMenu';
import { DeletePosition } from '../epmloyees/layout/DeletePosition';
import {usePositionContext} from "modules/hhrr/positions/epmloyees/context/PositionSelectedId";
import { ChangePositionName } from '../epmloyees/layout/ChangePositionName';
import {useChangePositionName} from "modules/hhrr/positions/hooks/use-changePositionName";
import PositionDottedMenu from './PositionDottedMenu';

export const Table = ({
                          rows,
                          loading
                      }: Partial<EnhancedTableProps<Position>>) => {
    const {setId,setDepartmentId }=usePositionContext()

    const {onChangePositionName}=useChangePositionName()
 


    const handleClick = (id: string , departmentId: string ) => {
        setId(id);
        setDepartmentId(departmentId);

    }

    const positionOptions = [
        { label: 'View Position', icon: <PersonIcon color="primary" /> },
        { label: 'Change Position Name', icon: <WorkIcon color="primary" /> },
        { label: 'Delete User', icon: <DeleteIcon sx={{ color: 'red' }} /> },
    ];

    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            showCheckBox={true}
            headCells={headCells}
            onPageChange={() => { }}
            render={(row) => {
                return <>
                    <TableCell>
                        {row.id}
                    </TableCell>
                    <TableCell>
                        {row.name}
                    </TableCell>
                    <TableCell>
                        {row.departmentId}
                    </TableCell>
                    <TableCell>
                        {row.employeeCount}
                    </TableCell>
                    <TableCell  onClick={()=>handleClick(row.id,row.departmentId)}  >
                        <PositionDottedMenu
                            name={row.name}
                            options={positionOptions}
                            mainModal={<DeletePosition  positions={rows} positionName={row.name}  count={row.employeeCount}  />}
                            NameModal={<ChangePositionName departmentId={row.departmentId} positions={rows}  id={null} create={onChangePositionName}/>}
                            />
                    </TableCell>

                </>
            }}
        />
    )
}
