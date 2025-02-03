
import React, { useState, useRef } from 'react';
import {Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Box,} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Flex} from "modules/core/components/flex";


interface SimpleListMenuProps {
    status?: string;
    onStatusChange: (status: string) => void;
}

const statusOptions = [
    { label: 'Active', backgroundColor: '#36976E', color: '#ffffff' },
    { label: 'Inactive', backgroundColor: '#777575', color: '#ffffff' },
    { label: 'Pending', backgroundColor: '#FF9500', color: '#ffffff' },
];

export default function SimpleListMenu({ status, onStatusChange }: SimpleListMenuProps) {
    const options = status ? statusOptions : [];
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState( options.findIndex((option) => option.label === status));
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };
    const handleMenuItemClick = (index: number) => {
        setSelectedIndex(index);
        setOpen(false);
        const selectedStatus = options[index].label;
        if (onStatusChange) {
            onStatusChange(selectedStatus);
        }
    };
    const selectedOption = options[selectedIndex];

    return (
        <>
            <ButtonGroup ref={anchorRef}
                         sx={{
                             px:1.5,
                             py:1,
                             border:'solid 1px lightgray'
                         }}
            >
                <Box
                    sx={{display:'flex', justifyContent:"space-between", alignItems:"center",gap:'15px'}}
                    onClick={handleToggle}
                >
                    <Button
                        sx={{
                            color: selectedOption?.color || 'black',
                            bgcolor: selectedOption?.backgroundColor || 'white',
                            border: '1px solid lightGray',
                            textTransform: 'none',
                            padding: '4px 10px',
                            borderRadius: '100px',
                        }}
                    >
                        {selectedOption?.label || 'Select Status'}
                    </Button>
                    <ArrowDropDownIcon />
                </Box>
            </ButtonGroup>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                sx={{ zIndex: 1 }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem
                                          sx={{
                                              border:'solid 1px #36976E',
                                              borderRadius:'5px',
                                              p:2,
                                              display: 'flex',
                                              flexDirection: 'column',
                                              alignItems: 'start',
                                          }}>
                                    {options.map((option, index) => (
                                        <Box
                                            key={option.label}
                                            onClick={() => handleMenuItemClick(index)}
                                            sx={{pr:11 ,marginX:"0",borderRadius:'5px' ,'&:hover': {
                                                    backgroundColor: '#E3EEE9',
                                                    color: '#000',
                                                    transition: 'background-color 0.3s ease',
                                                }
                                            }}>  <MenuItem
                                            key={option.label}
                                            sx={{
                                                borderRadius: '50px',
                                                my: '5px',
                                                px:2,
                                                zIndex:3,
                                                fontSize:"12px",
                                                backgroundColor: option.backgroundColor,
                                                color: option.color,'&:hover': {
                                                    backgroundColor: option.backgroundColor,
                                                    color: '#000',
                                                    transition: 'background-color 0.3s ease',
                                                }
                                            }}
                                        >
                                            {option.label}
                                        </MenuItem>
                                        </Box>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}
