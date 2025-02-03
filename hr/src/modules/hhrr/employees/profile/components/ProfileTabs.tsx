import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InfoTab from "modules/hhrr/employees/profile/components/InfoTab";
import AttendanceTab from "./AttendanceTab";
import LeaveTab from './LeaveTab';

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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ProfileTabs({data}:{data:any}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider',margin:'auto' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Attendance" {...a11yProps(1)} />
                    <Tab label="Leave" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <InfoTab data={data}/>
            </CustomTabPanel>
            <CustomTabPanel  value={value} index={1}>
               <AttendanceTab/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            <LeaveTab/>
            </CustomTabPanel>
        </Box>
    );
}
