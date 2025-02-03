'use client'

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { PRIMARY } from '@/modules/core/consts/theme'
import { NavigationItem } from './types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const NavItem = ({
                            label,
                            href,
                            icon
                        }: NavigationItem) => {

    const pathname = usePathname()
    const isActive = pathname.includes(href)

    return (
        <ListItem key={''} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                paddingInline: 0,
            }}>
                <Link
                    href={href}
                    style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                >
                    <ListItemIcon
                        sx={{
                            justifyContent: 'center',
                            ...isActive && { color: PRIMARY }
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            fontSize: 10.5,
                            color: isActive ? 'primary' : 'grey.700'
                        }}
                        primary={label}
                    />
                </Link>
            </ListItemButton>
        </ListItem>
    )
}
