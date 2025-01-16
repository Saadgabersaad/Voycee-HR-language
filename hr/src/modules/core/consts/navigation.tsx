import {
    Chat,
    Dashboard,
    ListAlt,
    People,
    Phone,
    CalendarMonth,
    DashboardOutlined,
    DeviceHub,
    BusinessCenter,
    LibraryAddCheck,
} from '@mui/icons-material'
import {JSX} from "react";

export type NavigationItem = {
    label: string
    href: string
    icon?: JSX.Element
    subItems?: NavigationItem[]
}

export const modules: NavigationItem[] = [
    {
        label: 'Dashboard',
        href: '/',
        icon: <Dashboard />
    },
    {
        label: 'HR',
        href: '/hhrr',
        icon: <People />,
        subItems: [
            {
                label: 'Employees',
                href: '/hhrr/employees',
                icon: <People />,
            },
            {
                label: 'Positions',
                href: '/hhrr/positions',
                icon: <BusinessCenter />
            },
            {
                label: 'Roles',
                href: '/hhrr/roles',
                icon: <LibraryAddCheck />
            },
            {
                label: 'Departments',
                href: '/hhrr/departments',
                icon: <DeviceHub />
            },
        ]
    },
    {
        label: 'CRM',
        href: '/crm',
        icon: <People />,
        subItems: [
            {
                label: 'Dashboard',
                href: '/dashboard',
                icon: <DashboardOutlined />,
                subItems: [
                    {
                        label: 'Overview',
                        href: '/overview',
                    }
                ]
            }
        ]
    },
    {
        label: 'Calendar',
        href: '/calendar',
        icon: <CalendarMonth />
    },
    {
        label: 'Chat',
        href: '/chat',
        icon: <Chat />
    },
    {
        label: 'Tickets',
        href: '/tickets',
        icon: <ListAlt />
    },
    {
        label: 'Call Center',
        href: '/call-center',
        icon: <Phone />
    }
]