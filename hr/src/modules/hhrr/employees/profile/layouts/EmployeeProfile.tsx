import React from 'react'
import { Page } from 'modules/core/components/page'
import ProfileInfo from "modules/hhrr/employees/profile/components/ProfileInfo";
import ProfileTabs from "modules/hhrr/employees/profile/components/ProfileTabs";
import {useEmployee} from "modules/hhrr/employees/profile/hooks/use-employee";

export default function EmployeeProfile() {

    const {data}= useEmployee()

    return (
        <Page>
            <ProfileInfo data={data} />
            <ProfileTabs data={data}/>
        </Page>
    )
}
