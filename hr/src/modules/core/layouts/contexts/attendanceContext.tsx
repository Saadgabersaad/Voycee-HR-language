import { useAttendance } from "@/modules/dashboard/hooks/use-attendance";
import React from "react";

type ContextStatusEntryType = ReturnType<typeof useAttendance>

export const AttendanceContext = React.createContext({} as ContextStatusEntryType);

export default function AttendanceContextProvider({ children }: Readonly<{
    children: React.ReactNode
}>) {
    const attendanceState = useAttendance();

    return (
        <AttendanceContext.Provider value={attendanceState}>
            {children}
        </AttendanceContext.Provider>
    )
}