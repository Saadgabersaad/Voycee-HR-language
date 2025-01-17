import React from 'react'
import { AttendanceTable } from '../components/Table';
import {Heading, HeadingActions, Page} from "@/modules/core/components/page";

export default function Attendance() {
    return (
        <Page>
            <Heading
                title='Attendance'
                description='All employee attendance etc'
            >
                <HeadingActions
                    disableDownload
                    disableImport
                    buttonText='Download'
                    mainModal={null}
                />
            </Heading>
            <AttendanceTable/>
        </Page>
    )
}
