import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material'
import { useState } from 'react'
import { NavigationItem } from './types'
import { PRIMARY } from '@/modules/core/consts/theme'
import Link from 'next/link'

type NavItemProps = {
    item: NavigationItem
    nestedItems?: boolean
}

export const SubNavItem = ({ item }: NavItemProps) => {
    // ITEM WITH NESTED ITEMS ARE NOT LINKS
    const withSubItems = Boolean(item?.subItems?.length)

    return <>
        {!withSubItems ? (
            <Link href={item.href}>
                <SubNavItemContent item={item} />
            </Link>
        ) : (
            <SubNavItemContent item={item} nestedItems />
        )}
    </>
}

const SubNavItemContent = ({
                               item,
                               nestedItems
                           }: NavItemProps) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        // IF NOT NESTED ITEMS IS A SUB ITEM
        if (!nestedItems) return
        setOpen(b => !b)
    }

    return <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{ color: PRIMARY }}>
                {item.icon}
            </ListItemIcon>
            <ListItemText
                primary={item?.label}
                primaryTypographyProps={{
                    fontSize: 15,
                    color: '#414651',
                    ...!nestedItems && {
                        sx: {
                            paddingLeft: '1.3rem'
                        }
                    }
                }}
            />
            {nestedItems && (
                <>{open ? <ExpandLess sx={{ color: 'grey.500' }} /> : <ExpandMore sx={{ color: 'grey.500' }} />}</>
            )}
        </ListItemButton>
        {nestedItems && (
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    {item.subItems?.map((subItem) => (
                        <SubNavItem item={subItem} key={subItem.label} />
                    ))}
                </List>
            </Collapse>
        )}
    </>
}