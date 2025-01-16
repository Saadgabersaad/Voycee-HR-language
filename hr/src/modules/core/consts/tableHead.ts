export type Order = 'asc' | 'desc';

export interface Data {
    id: string;
    name: string;
    position: string;
    phoneNumber: number;
    email: string;
    department: string;
    status: string;
}


export interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
}

export const rows: Data[] = [
    { id: '1', name: 'Cupcake', position: 'HR', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Inactive' },
    { id: '2', name: 'sadsd', position: 'HR', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: '3', name: '[[[[[asdas]]]]]', position: 'User', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: '4', name: 'Cupcfsdake', position: 'Admin', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: '5', name: 'Cupcake', position: 'Admin', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id:'6', name: 'tyutyu', position: 'User', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: '7', name: 'oooooo', position: 'User', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },

];

export const headCells :readonly HeadCell[] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'position', numeric: false, disablePadding: false, label: 'Position' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'department', numeric: false, disablePadding: false, label: 'Department' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];



export interface AttendanceData {
    id: number;
    employeeId: string;
    time: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

export const attendanceHeadCells :readonly HeadCell[] = [
    { id: 'data', numeric: false, disablePadding: true, label: 'Date' },
    { id: 'position', numeric: false, disablePadding: false, label: 'Check In and Out' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Breaks' },
    { id: 'department', numeric: false, disablePadding: false, label: 'Working Hours' },
];



export const attendanceRows: AttendanceData[] = [
    { id: 1, type: 'July 01, 2023', time: '09:30 AM', createdAt:  "2024-12-24T20:09:03.697Z", updatedAt: '09:02 Hrs', employeeId: 'On Time' },
    { id: 2, type: 'July 01, 2023', time: '09:30 AM', createdAt:  "2024-12-24T20:09:03.697Z", updatedAt: '09:02 Hrs', employeeId: 'Late' },
    { id: 3, type: 'July 01, 2023', time: '09:28 AM', createdAt:  "2024-12-24T20:09:03.697Z", updatedAt: '09:02 Hrs', employeeId: 'On Time' },
    { id: 4, type: 'July 01, 2023', time: '09:39 AM', createdAt:  "2024-12-24T20:09:03.697Z", updatedAt: '09:02 Hrs', employeeId: 'Late' },
    { id: 5, type: 'July 01, 2023', time: '09:28 AM', createdAt:  "2024-12-24T20:09:03.697Z", updatedAt: '09:02 Hrs', employeeId: 'On Time' },
    { id: 6, type: 'July 01, 2023', time: '09:40 AM', createdAt:  "2024-12-24T20:09:03.697Z", updatedAt: '09:02 Hrs', employeeId: 'On Time' },
    { id: 7, type: 'July 01, 2023', time: '09:28 AM', createdAt:  "2024-12-24T20:09:03.697Z", updatedAt: '09:02 Hrs', employeeId: 'On Time' },

];




export interface LeaveData {
    id: number;
    date: string;
    period: string;
    duration: string;
    reason: string;
    break: string;
    status: string;
    supervisor: string;
}
export const leaveHeadCells :readonly HeadCell[] = [
    { id: 'data', numeric: false, disablePadding: true, label: 'Date' },
    { id: 'period', numeric: false, disablePadding: true, label: 'Period' },
    { id: 'duration', numeric: false, disablePadding: false, label: 'Duration' },
    { id: 'reason', numeric: false, disablePadding: false, label: 'Reason' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'supervisor', numeric: false, disablePadding: false, label: 'Supervisor' },
    { id: 'Note', numeric: false, disablePadding: false, label: '' },
];


export const LeaveRows: LeaveData[] = [
    { id: 1, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved', },
    { id: 2, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Denied' ,},
    { id: 3, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved' ,},
    { id: 4, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Denied' ,},
    { id: 5, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved', },
    { id: 6, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Pending' ,},
    { id: 7, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved', },
    { id: 8, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved', },
    { id: 9, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved' ,},
    { id: 10, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved' ,},
    { id: 11, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved', },
    { id: 12, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved' ,},
    { id: 13, date: 'July 01, 2023',period:'July 01, 2023 ==> July 01, 2023', duration: '2 Days', reason: "Vacation", break: '00:30 Min', supervisor: 'Mark Willians', status: 'Approved' ,},

];