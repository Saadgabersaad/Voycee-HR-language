'use client'

import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Logout from '@mui/icons-material/Logout'
import { ExpandMore } from '@mui/icons-material'
import Link from 'next/link'
import { PRIMARY } from '../../consts/theme'
import UserNavSection from '@/modules/dashboard/components/UserNavSelection'

//TODO: CREATE A MENU COMPONENT
export function AccountMenu(userData:any) {
    userData=userData.userData;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <IconButton size='small' sx={{ p: 0 }} onClick={handleClick}>
                <ExpandMore sx={{ color: PRIMARY }} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                // onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            width: 250,
                            maxWidth: '100%',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 26,
                                height: 26,
                                ml: -0.5,
                                mr: 1,
                            },
                            '& .MuiButtonBase-root': {
                                fontSize: 15,
                                width: '100%'
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <UserNavSection userData={userData}/>
                <Link href='/profile'>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize='small' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
