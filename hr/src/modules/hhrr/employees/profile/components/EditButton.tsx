import React from 'react'
import {Flex} from "modules/core/components/flex";
import {Box, Button, Typography} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {PRIMARY} from "modules/core/consts/theme";

const EditButton = () => {
    return (
        <Box>
           <Flex gap={2.5}>
               <Button size={'small'} sx={{borderRadius:5}} variant='contained' color='primary' >Active</Button>
               <Flex justifyContent='center' alignItems={'center'} gap={0.5}>
                   <Typography variant='subtitle2' color='primary' component='h2'>Edit Employee</Typography>
                   <OpenInNewIcon fontSize="small" sx={{color:PRIMARY}}/>
               </Flex>
           </Flex>
        </Box>
    )
}
export default EditButton
