import { Avatar, Typography } from '@mui/material'
import { Flex } from '@/modules/core/components/flex'
import { AccountMenu } from './AccountMenu'

export const User = () => {

    const userData={
        name:'John Doe',
        position:'Recruitment Manager',
        imgURL:'https://randomuser.me/api/portraits/men/22.jpg'
    }

    return (
        <Flex gap={1.5} alignItems='center'>
            <Avatar
                alt={userData.name}
                src={userData.imgURL}
            />
            <div>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Typography
                        color='primary'
                        fontSize={14}
                        fontWeight={500}
                        sx={{ paddingBottom: 0, marginBottom: -.2 }}
                    >
                        {userData.name}
                    </Typography>
                    <AccountMenu userData={userData}/>
                </Flex>
                <Typography
                    component='span'
                    color='grey.600'
                    fontSize={12}
                    display='block'
                >
                    {userData.position}
                </Typography>
            </div>
        </Flex>
    )
}
