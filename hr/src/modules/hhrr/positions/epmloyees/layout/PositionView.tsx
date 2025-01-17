import React from "react";
import {Page, Heading} from '@/modules/core/components/page'
import {Box, Typography} from "@mui/material";
import {PRIMARY} from "@/modules/core/consts/theme";
import {Table} from "@/modules/hhrr/positions/epmloyees/components/PositionViewTable";
import TextField from "@mui/material/TextField";
import {Flex} from "@/modules/core/components/flex";
import {useSearchParams} from 'next/navigation';
import {useDepartmentById} from "@/modules/hhrr/departments/hooks/use-departmentById";

export default function PositionView() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const {data} = useDepartmentById()
    const [positionName, setPositionName] = React.useState(name);
    // @ts-ignore
    const departmentName = data.name  || ''

    return (
        <Page>
            <Heading title=' Tech Admin Position' description='' children={undefined}/>
            <Box
                sx={{m: 1, width: 'full'}}
            >
                <Flex gap={2}>
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        label="Position Name"
                        value={positionName}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPositionName(event.target.value);
                        }}
                    />
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        label="Department Related"
                        value={departmentName}

                    />
                </Flex>
            </Box>

            <Typography fontWeight='bold' fontSize={'24px'} variant='h4' component='h6'>
                Employees Assigned Position
                <span style={{color: PRIMARY}}> {name} </span> in department
                <span style={{color: PRIMARY}}> {departmentName || ''}</span>
            </Typography>

            <Table department={data.data}/>
        </Page>
    );
}
