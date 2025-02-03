import React from 'react'
import {Flex} from "modules/core/components/flex";
import {Box, Typography} from "@mui/material";

const InfoTab = ({data}:{data:any}) => {
    return (
        <Flex justifyContent="start" gap={5} alignItems="center" paddingY={4} sx={{ width: '100%' }}>
            <Box  sx={{width:'35%',display:'flex',flexDirection:'column',gap:4}}>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"} component="div">First Name</Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">{data?.name} </Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Mobile Number</Typography>
                    <Typography variant="subtitle1"  color={"primary"} fontWeight={'bold'} component="div">{data?.phone|| 'No Phone Number'} </Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Date of Birth</Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">{data?.date|| 'No date Of Birth'}</Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Country </Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">USA </Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Zip Code</Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">35624 </Typography>
                </Flex>
            </Box>
        <Box sx={{width:'35%',display:'flex',flexDirection:'column',gap:4}}>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Last Name</Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">Simmons </Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Email Address</Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">{data.email} </Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Gender</Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">Female </Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">Nationality</Typography>
                    <Typography variant="subtitle1" color={"primary"}  fontWeight={'bold'} component="div">American </Typography>
                </Flex>
                <Flex flexDirection="column" borderBottom={1} borderColor="divider">
                    <Typography variant="subtitle2" color={"#616161"}  component="div">City</Typography>
                    <Typography variant="subtitle1" color={"primary"} fontWeight={'bold'} component="div">California </Typography>
                </Flex>
            </Box>


        </Flex>
    )
}
export default InfoTab
