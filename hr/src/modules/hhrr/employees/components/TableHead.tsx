import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { HeadCell, Data, Order } from 'modules/core/consts/tableHead';

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: readonly HeadCell[];
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells } =
        props;

    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (

        <TableHead>
            <TableRow sx={{height:'56px',bgcolor:'#F7F7F7'}}>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all items' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        sx={{fontWeight: 'bold',fontSize:'16px'}}
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'none'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id as keyof Data)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell/>
            </TableRow>
        </TableHead>
    );
};

export default EnhancedTableHead;
