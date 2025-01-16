import React, { useContext, useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Box,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { Attendance } from '../shared/Attendance';
import { AttendanceContext } from '../../core/layouts/contexts/attendanceContext';

const TableAttendance = () => {
    const userID = 'cm489st080002bf0rp2ld1uxf';
    // const { entrieStatus, setEntrieStatus } = useContext(ContextStatus);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const { entries, onGetUserTimeEntries, onGetUserTimeEntriesDate } = useContext(AttendanceContext);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Handle pagination changes
    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDateChange = (date: Dayjs | null) => {
        if (date && date.isValid()) {
            const fixedDate = date.set('hour', 0).set('minute', 0).set('second', 0);
            setSelectedDate(fixedDate);
        } else {
            setSelectedDate(null);
        }
    };

    // Filter rows by selected date
    const filteredRows = entries
        ? entries.filter((entry) => {
            const entryDate = new Date(entry.time).toISOString().split('T')[0];
            const selectedDateString = selectedDate?.format('YYYY-MM-DD');
            return selectedDate ? entryDate === selectedDateString : true;
        })
        : [];

    // Paginate filtered rows
    const paginatedRows = filteredRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    useEffect(() => {
        const fetchData = async () => {
            if (selectedDate?.isValid) {
                const dateISOstr = selectedDate.set('hour', 0).set('minute', 0).set('second', 0).toISOString();
                await onGetUserTimeEntriesDate(userID, dateISOstr);
            } else {
                await onGetUserTimeEntries(userID);
            }
        };

        fetchData();
    }, [selectedDate]);

    return (
        <Box>
            {/* DatePicker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{ mb: 1 }}
                    label="Select Date"
                    value={selectedDate}
                    onChange={(newDate) => handleDateChange(newDate)}
                />
            </LocalizationProvider>

            {/* Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.map((entry: Attendance) => (
                            <TableRow key={entry.id}>
                                <TableCell>{new Date(entry.time).toLocaleDateString()}</TableCell>
                                <TableCell>{entry.type === 'Clock_in' ? 'Clocked In' : entry.type === 'Break_start' ? 'On Break' : entry.type === 'Break_end' ? 'Finish Break' : 'Clocked Out'}</TableCell>
                                <TableCell>{new Date(entry.time).toLocaleTimeString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* Pagination */}
                <TablePagination
                    rowsPerPageOptions={[10, 15, 25]}
                    component="div"
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Box>
    );
};

export default TableAttendance;
