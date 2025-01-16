'use client'
import { Toaster } from 'react-hot-toast'
import { AppHeader } from './Appbar'
import { Main } from './Main'
import React from 'react';
import AttendanceContextProvider from '../contexts/attendanceContext';


export const AppLayout = ({ children }: Readonly<{
    children: React.ReactNode
}>) => {
    return <AttendanceContextProvider>
        <AppHeader />
        <Main>
            {children}
            <Toaster />
        </Main>
    </AttendanceContextProvider>
}
