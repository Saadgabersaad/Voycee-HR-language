'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from "@/modules/hhrr/employees/components/Table";
import { Employee } from '../shared/Employee';
import { useEmployees } from '../hooks/use-employees';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
        </div>
    );
}

export type Response = {
    data: Employee[]
}

export default function BasicTabs() {
    const { data, onSearch, isLoading, filterByDepartment } = useEmployees()

    return (
        <Box sx={{ width: '100%' }}>
            <Table
                rows={data?.data || []}
                onSearch={onSearch}
                isLoading={isLoading}
                filterByDepartment={filterByDepartment}
            />
        </Box>
    );
}
