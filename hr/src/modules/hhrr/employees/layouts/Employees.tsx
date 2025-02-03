'use client'

import CustomTabPanel from "../components/EmployeesTabs"
import { Page, Heading } from '@/modules/core/components/page'
import { HeadingActions } from '@/modules/core/components/page/Actions'
import AddEmployeeFormDialog from './AddEmployee'

export default function Employees() {
    return (
        <Page>
            <Heading title='Employee List' description='View all  your Company’s Employees'>
                <HeadingActions
                    buttonText='Add Employee'
                    mainModal={<AddEmployeeFormDialog open={false} />}
                />
            </Heading>
            <CustomTabPanel />
        </Page>
    )
}
