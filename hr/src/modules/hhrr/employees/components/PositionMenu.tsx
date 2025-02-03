import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Flex } from 'modules/core/components/flex';
import {MenuList} from "@mui/material";

const statusOptions = [
    { label: 'Active', backgroundColor: '#36976E', color: '#ffffff' },
    { label: 'Inactive', backgroundColor: '#777575', color: '#ffffff' },
    { label: 'Pending', backgroundColor: '#FF9500', color: '#ffffff' },
];

interface SimpleListMenuProps {
    status?: string;
}

export default function SimpleListMenu({ status }: SimpleListMenuProps) {
    const options = status ? statusOptions : [];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0); // Default to the first option
    const open = Boolean(anchorEl);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Dynamic button styles
    const selectedOption = options[selectedIndex];
    const buttonStyles = {
        backgroundColor: selectedOption?.backgroundColor ,
        color: selectedOption?.color ,
        width: 'fit-content',
        paddingX: '15px',
        paddingY: '4px',
        borderRadius: '100px',
    };

    return (
        <div>
            <List
                component="nav"
                aria-label="Dropdown menu"
                sx={{
                    bgcolor: 'background.paper',
                    width: 'fit-content',
                    border: '1px solid lightGray',
                    p: 1,
                    borderRadius: '5px',
                    px:2

                }}
                onClick={handleClickListItem}

            >
             <Flex justifyContent="space-between" alignItems="center">
                 <ListItemButton
                 id="lock-button"
                 aria-haspopup="listbox"
                 aria-controls="lock-menu"
                 aria-label="Dropdown menu"
                 aria-expanded={open ? 'true' : undefined}
                 sx={buttonStyles}
             >
                 <ListItemText primary={selectedOption?.label } />
             </ListItemButton>
                 <ArrowDropDownIcon color="action" />
             </Flex>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}

            >
                    <MenuList>
                {options.map((option, index) => (
                    <MenuItem
                        key={option.label}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{
                            backgroundColor: option.backgroundColor ,
                            color: option.color ,
                            marginX:"20px",
                            marginY:"5px",
                            borderRadius:'100px'
                        }}
                    >
                        {option.label}
                    </MenuItem>
                ))}
                    </MenuList>
            </Menu>
        </div>
    );
}
