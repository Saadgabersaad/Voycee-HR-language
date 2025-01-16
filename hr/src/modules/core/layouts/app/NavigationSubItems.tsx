'use client'

import { List, ListSubheader, styled, Typography } from '@mui/material'
import { SubNavItem } from './SubNavItem'
import { usePathname } from 'next/navigation'
import { PRIMARY } from 'modules/core/consts/theme'
import { modules } from 'modules/core/consts/navigation'
import { Flex } from 'modules/core/components/flex'

const Navbar = styled(List)<{ component?: React.ElementType }>({
    '& .MuiListItemButton-root': {
        paddingLeft: 20,
        paddingRight: 20,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 12,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
})

// SECOND SIDEBAR
export function NavigationSubItems() {
    const pathname = usePathname()
    const pathnames = pathname.split('/')
    const modulePath = pathnames.length > 1 ? `/${pathnames[1]}` : pathname
    const module = modules.find(mod => mod.href === modulePath)
    const subItems = module?.subItems

    return (
        <Navbar
            sx={{
                width: '100%',
                maxWidth: 235,
                bgcolor: 'background.paper',
                borderWidth: '1px',
                borderColor: 'grey.200',
                borderStyle: 'solid'
            }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader component='div' id="nested-list-subheader" sx={{ color: PRIMARY }}>
                    <Flex alignItems='center' gap={1.2} fontSize={16} my={2} mx={.5}>
                        {module?.icon} <Typography component='span' sx={{ color: 'grey.700' }}>{module?.label}</Typography>
                    </Flex>
                </ListSubheader>
            }
        >
            {subItems?.map((item) => (
                <SubNavItem key={item.label} item={item} />
            ))}
        </Navbar>
    )
}
