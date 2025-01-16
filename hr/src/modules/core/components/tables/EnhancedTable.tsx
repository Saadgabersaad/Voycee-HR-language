import React from 'react'
import { Checkbox, TableCell, Skeleton, TableContainer, Table, TableRow, TableBody, Paper, TablePagination } from '@mui/material'
import { EnhancedTableHead } from './EnhancedTbaleHead'
import {HeadCell} from "@/modules/core/consts/tableHead";

export type EnhancedTableProps<T> = {
    rows: (T & { id: string })[]
    headCells: HeadCell[]
    loading: boolean
    rowsPerPageCount?: number
    onPageChange(newPage: number): void
    mainModal?: React.ReactNode
    render?: (row: T, index: number) => React.ReactNode
    showCheckBox?: boolean
}

export function EnhancedTable<T>({
                                     rows,
                                     render,
                                     headCells,
                                     loading,
                                     showCheckBox,
                                     rowsPerPageCount = 10,
                                     onPageChange,
                                 }: EnhancedTableProps<T>) {

    const [selected, setSelected] = React.useState<readonly string[]>([])
    const [page, setPage] = React.useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageCount || 5)

    const handleClick = (_event: React.MouseEvent<unknown>, id: string) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            )
        }
        setSelected(newSelected)
    }

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            if (rows) {
                const newSelected = rows?.map((n) => n?.id)
                setSelected(newSelected);
                return
            }
        }
        setSelected([])
    }

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage)
        onPageChange(newPage)
    }

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    /*
  const visibleRows = React.useMemo(
    () => loading ? [] :
      [...rows]
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, loading],
  )*/

    const getRows = () => {
        if (!rows?.length) {
            return []
        }
        return [...rows]
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    }

    const visibleRows = getRows()

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <EnhancedTableHead
                        headCells={headCells}
                        numSelected={selected.length}
                        rowCount={rows?.length || 0}
                        showCheckBox={showCheckBox}
                        onSelectAllClick={handleSelectAllClick}
                    />
                    <TableBody>
                        {loading ? <TableRowsLoader columnsCount={headCells.length} /> : (
                            <>
                                {visibleRows?.map((row, index) => {
                                    const key = row.id
                                    const isItemSelected = selected.includes(key);
                                    const labelId = `enhanced-table-checkbox-${index}`

                                    return (
                                        <TableRow
                                            hover
                                            role='checkbox'
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={key}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer', height: '65px',width: 'fit-content' }}
                                        >
                                            {showCheckBox &&  <TableCell padding="checkbox">
                                                <Checkbox
                                                    onClick={(event) => handleClick(event, key)}
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>}
                                            {render && render(row, index)}
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 56,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    page={page}
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows?.length || 0}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Paper>
    )
}


const TableRowsLoader = ({ rowsNum = 5, columnsCount = 5 }) => {
    return [...Array(rowsNum)].map((row, index) => (
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            {[...Array(columnsCount)].map((_, i) => (
                <TableCell component="th" scope="row" key={String(i)}>
                    <Skeleton animation="wave" variant="text" />
                </TableCell>
            ))}
        </TableRow>
    ));
};