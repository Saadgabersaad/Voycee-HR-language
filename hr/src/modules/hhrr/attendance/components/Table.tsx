import React, { useState } from 'react';
import { Box, TableCell } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { EnhancedTable } from '@/modules/core/components/tables/EnhancedTable';
import FilterBtn from "@/modules/core/components/FilterBtn";
import { Search } from '@/modules/core/components/Search';

export const AttendanceTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
    const [positionFilter, setPositionFilter] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState<string | null>(null);

    const rows = [
        {id:'emp1', name: 'Ahmed Mohamed', department: 'Engineering', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs' },
        {id:'emp2', name: 'Ali Saleh', department: 'Human Resources', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp3', name: 'Romany Moner', department: 'Product', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp4', name: 'Omar Ahmed', department: 'Design', date: '12 May, 2024', checkInOutTime:'09:10 AM - 04:30 PM',status: 'Late', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp5', name: 'Romany Moner', department: 'Sales', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp6', name: 'Romany Moner', department: 'Data Analytics', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp7', name: 'Romany Moner', department: 'Customer Support', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp8', name: 'Romany Moner', department: 'Finance', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp9', name: 'Romany Moner', department: 'Marketing', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'Late', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp10', name: 'Romany Moner', department: 'Infrastructure', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp11', name: 'Romany Moner', department: 'Infrastructure', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp12', name: 'Romany Moner', department: 'Infrastructure', date: '12 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
        {id:'emp13', name: 'Romany Moner', department: 'Infrastructure', date: '17 May, 2024',checkInOutTime:'09:10 AM - 04:30 PM', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  }
    ];

    const filteredRows = rows.filter((row) => {
        const matchesSearch = row.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDate = selectedDate ? row.date === selectedDate.format('DD MMM, YYYY') : true;
        const matchesPosition = positionFilter ? row.department === positionFilter : true;
        const matchesStatus = statusFilter ? row.status === statusFilter : true;

        return matchesSearch && matchesDate && matchesPosition && matchesStatus;
    });

    return (
        <div>
            <Box gap={2} sx={{ display: 'flex', marginBottom: '16px' }}>
                <Search
                    placeholder="Name"
                    onSearch={setSearchTerm}
                />
                <FilterBtn
                    onFilterChange={{
                        setPositionFilter,
                        setStatusFilter,
                    }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={selectedDate}
                        onChange={(date: Dayjs | null) => setSelectedDate(date)}
                        slotProps={{
                            textField: { placeholder: "Select Date" },
                        }}
                    />
                </LocalizationProvider>
            </Box>

            <EnhancedTable
                loading={false}
                showCheckBox={true}
                rows={filteredRows as any[]}
                headCells={[
                    { id: 'name', label: 'Name', disablePadding: false, numeric: false },
                    { id: 'department', label: 'Department', disablePadding: false, numeric: false },
                    { id: 'date', label: 'Date', disablePadding: false, numeric: false },
                    { id: 'checkInOutTime', label: 'Check In & Out Time', disablePadding: false, numeric: false },
                    { id: 'status', label: 'Status', disablePadding: false, numeric: false },
                    { id: 'breaks', label: 'Breaks', disablePadding: false, numeric: false },
                    { id: 'workingHours', label: 'Working Hours', disablePadding: false, numeric: false },
                ]}
                rowsPerPageCount={10}
                onPageChange={() => {}}
                render={(row) => (
                    <>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.department}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.checkInOutTime}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.breaks}</TableCell>
                        <TableCell>{row.workingHours}</TableCell>
                    </>
                )}
            />
        </div>
    );
};
