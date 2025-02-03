import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { LeaveRows, leaveHeadCells } from 'modules/core/consts/tableHead';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import theme, {PRIMARY} from "modules/core/consts/theme";
import {Flex} from "modules/core/components/flex";
import DatePickerViews from "modules/hhrr/employees/profile/components/DatePicker";
import Button from "@mui/material/Button";
import {Download} from "@mui/icons-material";
interface EnhancedTableProps {
    headCells: readonly {
        id: string;
        label: string;
        numeric: boolean;
        disablePadding: boolean;
    }[];
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = ({ headCells }) => (
    <TableHead>
        <TableRow sx={{ height: '56px', bgcolor: '#F7F7F7' }}>
            {headCells.map((headCell) => (
                <TableCell
                    key={headCell.id}
                    sx={{ fontWeight: 'bold', fontSize: '16px', pl: 2 }}
                    align={headCell.numeric ? 'left' : 'left'}
                    padding={headCell.disablePadding ? 'normal' : 'none'}
                >
                    {headCell.label}
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
);

const AttendanceTab: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);
    const [openRows, setOpenRows] = React.useState<{ [key: number]: boolean }>({});

    const handleToggleRow = (rowId: number, status: string) => {
        if (status === 'Denied') {
            setOpenRows((prev) => ({
                ...prev,
                [rowId]: !prev[rowId],
            }));
        }
    };

    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getStatusStyles = (status: string) => {
        const styles: Record<string, { bgcolor: string; color: string }> = {
            Approved: { bgcolor: '#ecf9f3', color: '#3FC28A' },
            Pending: { bgcolor: '#fff8e1', color: '#ffc107' },
            Denied: { bgcolor: '#fce4e4', color: '#f44336' },
        };
        return {
            ...styles[status],
            width: 'fit-content',
            py: 0.5,
            px: 2.2,
            borderRadius: 1,
        };
    };

    const visibleRows = React.useMemo(
        () => LeaveRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [page, rowsPerPage]
    );

    return (
        <Box sx={{ bgcolor: 'grey.100', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Flex height={'40px'} justifyContent={'space-between'} alignItems={'center'}>
                <DatePickerViews/>
                <Button startIcon={<Download />} variant='contained'  >
                    Download Logs
                </Button>
            </Flex>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                        <EnhancedTableHead headCells={leaveHeadCells} />
                        <TableBody>
                            {visibleRows.map((row) => (
                                <React.Fragment key={row.id}>
                                    <TableRow hover sx={{height:'52px'}}>
                                        <TableCell padding={'none'} sx={{ pl: 2 }}>{row.date}</TableCell>
                                        <TableCell padding={'none'} sx={{ pl: 2,borderRight:'solid 1px lightgray',borderLeft:'solid 1px lightgray' }}>{row.period}</TableCell>
                                        <TableCell padding={'none'} sx={{ pl: 2 }}>{row.duration}</TableCell>
                                        <TableCell padding={'none'} sx={{ pl: 2 }}>{row.reason}</TableCell>
                                        <TableCell padding={'none'} sx={{ pl: 2 }}>
                                            <Box sx={getStatusStyles(row.status)}>{row.status}</Box>
                                        </TableCell>
                                        <TableCell padding={'none'} sx={{ pl: 2 }}>{row.supervisor}</TableCell>
                                        <TableCell padding={'none'}>
                                            {row.status === 'Denied' && (
                                                <IconButton
                                                    sx={{ color: theme.palette.primary.main }}
                                                    size="small"
                                                    onClick={() => handleToggleRow(row.id, row.status)}
                                                    aria-expanded={openRows[row.id] || false}
                                                >
                                                    <Flex>
                                                        <InsertCommentOutlinedIcon />
                                                        <ExpandMoreIcon />
                                                    </Flex>
                                                </IconButton>
                                            )}


                                        </TableCell>
                                    </TableRow>
                                    {/* Collapsible Row */}
                                    <TableRow>
                                        <TableCell colSpan={6} style={{ padding: 0 }}>
                                            <Collapse in={openRows[row.id]} timeout="auto" unmountOnExit>
                                                <Box sx={{ margin: 2, padding: 2, bgcolor: '#f9f9f9', borderRadius: 1 }}>
                                                    {/* Add detailed content here */}
                                                    <strong>Details for {row.date}:</strong>
                                                    <Box>
                                                        <p>Additional information about this entry can go here.</p>
                                                    </Box>
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={LeaveRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};

export default AttendanceTab;
