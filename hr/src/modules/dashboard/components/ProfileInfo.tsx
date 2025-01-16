'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Flex } from 'modules/core/components/flex';
import { Page } from 'modules/core/components/page';
import Image from 'next/image';
import React from 'react';
import { Email, LocalFireDepartment, Phone } from '@mui/icons-material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function ProfileInfo() {
    const profileImage = 'https://smarterpaymentsummit.co.uk/wp-content/uploads/2019/04/profile-pic-dummy.png';
    return (
        <Page>
            <Flex>
                <Box sx={{border:'1px green solid',borderRadius:'5px', p:'16px 32px'}}>
                    <Box sx={{mb:'20px'}}>
                        <Image
                            src={profileImage}
                            alt=''
                            width={100}
                            height={100}
                            className='rounded-full'
                            loading='lazy'
                            unoptimized
                        />
                    </Box>
                    <Box>
                        <Typography color='#36976E' fontWeight='bold' fontSize={'24px'} variant='h4' component='h2'>
                            Romany Moner
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <Email sx={{color:'#36976E'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Romanym2020@gmail.com"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Phone sx={{color:'#36976E'}}/>
                                </ListItemIcon>
                                <ListItemText primary="+201062791045"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BusinessCenterIcon sx={{color:'#36976E'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Full-Stack Intern"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocalFireDepartment sx={{color:'#36976E'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Web Development"/>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Flex>
        </Page>
    )
}
