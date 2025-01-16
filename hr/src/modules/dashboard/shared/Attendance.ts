export type EventType= 'Clock_in'| 'Clock_Out'| 'Break_start'| 'Break_end'

export interface Attendance {
    createdAt?:string
    employeeId:string
    id?:string
    time:string
    type: EventType
    updatedAt?:string
}

export interface CreateAttendanceEntrie {
    employeeId:string
    eventType: EventType
    timestamp:string
}