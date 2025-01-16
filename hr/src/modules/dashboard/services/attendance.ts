import { api, HttpMethod } from 'modules/core/utils/api';
import { Attendance, CreateAttendanceEntrie } from '../shared/Attendance';

export const createUserAttendanceTimeEntrie = (createAttendanceEntrie: CreateAttendanceEntrie) => {
    return api<Attendance>(HttpMethod.POST, '/time-entries', createAttendanceEntrie);
}

export const getCurrentStatus = (userID:string) => {
    return api<Attendance[]>(HttpMethod.GET, `/employees/${userID}/time-entries?skip=0&take=1&sortByOrder=desc`);
}

export const getUserTimeEntries = (userID:string) => {
    return api<Attendance[]>(HttpMethod.GET, `/employees/${userID}/time-entries?take=1000&sortByOrder=desc`);
}

// export const getUserTimeEntriesPages = (userID:string) => {
//   return api<Attendance[]>(HttpMethod.GET, `/employees/${userID}/time-entriesskip=1000&take=1000&sortByOrder=desc`);
// }

export const getUserTimeEntriesForDate = (userID:string,date:string) => {
    return api<Attendance[]>(HttpMethod.GET, `/employees/${userID}/time-entries?startTime=${date}&sortByOrder=desc`);
}