'use client'

import { Heading, Page } from 'modules/core/components/page';
import CustomTabPanel from '../components/DashboardTabs'
import React from 'react';
import { Box, Grid2 } from '@mui/material';
import Clocks from '../components/Clock';

export default function Dashboard() {
    return (
        <Page>
            <Grid2
                container
                spacing={1}
            >
                <Grid2 size={8}>
                    <Box>
                        <Heading
                            title='My Dashboard'
                            description=''
                        >
                            <></>
                        </Heading>
                        <CustomTabPanel />
                    </Box>
                </Grid2>
                <Grid2 size={4}>
                    <Box>
                        <Clocks/>
                    </Box>
                </Grid2>
            </Grid2>
        </Page>
    )
}
