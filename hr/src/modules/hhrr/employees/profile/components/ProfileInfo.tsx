import React from 'react'
import {Flex} from "modules/core/components/flex";
import {Box, Typography} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import {PRIMARY} from "modules/core/consts/theme";
import EditButton from "modules/hhrr/employees/profile/components/EditButton";
import Avatar from "@mui/material/Avatar";
import {useEmployee} from "modules/hhrr/employees/profile/hooks/use-employee";

const ProfileInfo = ({data}:{data:any}) => {

    return (
        <Box sx={{border:'solid 1px ',borderColor:PRIMARY,borderRadius:1,px:4,py:2}}>
            <Flex justifyContent='space-between' alignItems='start'>
                <Flex gap={1.5} >
                    <Box>
                        <Avatar
                        variant='square'
                        sx={{width:'100px',height:"100px"}}
                        alt='Current user name'
                        src='https://randomuser.me/api/portraits/men/22.jpg'   />
                    </Box>

                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',gap:1}}>
                        <Typography sx={{color:PRIMARY,fontWeight:"bold"}} variant="h5" component="h2">{data?.name} {data?.lastName}</Typography>
                        <Flex  alignItems="center" gap={1.2} >
                            <EmailIcon sx={{color:PRIMARY}}/>
                            <Typography color={"#616161"} variant="subtitle2" component="h2">{data?.email}</Typography>
                        </Flex>
                        <Flex  alignItems="center" gap={1.2}>
                            <PhoneIcon sx={{color:PRIMARY}}/>
                            <Typography color={"#616161"} variant="subtitle2" component="h2">{data?.phone || 'No Phone Number'}</Typography>
                        </Flex>
                        <Flex  alignItems="center" gap={1.2}>
                            <BusinessCenterIcon sx={{color:PRIMARY}}/>
                            {/*<Typography color={"#616161"} variant="subtitle2" component="h2">{data?.position.name}</Typography>*/}
                        </Flex>
                        <Flex  alignItems="center" gap={1.2}>
                            <DeviceHubIcon sx={{color:PRIMARY}}/>
                            {/*<Typography color={"#616161"} variant="subtitle2" component="h2">{data.position.departmentId}</Typography>*/}
                        </Flex>
                    </Box>
                </Flex>
                <EditButton/>
            </Flex>
        </Box>
    )
}
export default ProfileInfo
