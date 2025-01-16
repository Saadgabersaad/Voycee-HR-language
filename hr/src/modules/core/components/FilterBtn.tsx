import React, { useState, useRef } from 'react';
import { Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Box, } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';

type GroupOptions = {
    options: any[]
    title: string
    onSelect(id: string): void
}

interface FilterBtnProps {
    optionGroups: GroupOptions[]
}
const FilterBtn = ({ optionGroups }: FilterBtnProps) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };

    const handleOptionClick = (group: any, optionId: string) => {
        console.log(group)
        group.onSelect(optionId);
        //        setOpen(false);
    };

    return (
        <>
            <ButtonGroup
                ref={anchorRef}
                sx={{ color: '#424242', bgcolor: 'white', }}
            >
                <Button
                    sx={{
                        border: '1px solid lightGray', borderRadius: '5px',
                        color: '#424242', width: '220px', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center',
                        py: 0, fontWeight: 'bold', fontSize: '16px',
                        textTransform: 'capitalize',
                    }}
                    onClick={handleToggle}
                >
                    <FilterListIcon />
                    <span>Filters</span>
                    <ArrowDropDownIcon />
                </Button>
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
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    sx={{ padding: '8px', borderRadius: '5px', }}
                                    autoFocusItem>
                                    <Box
                                        sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, }}>

                                        {optionGroups?.map((group) => (
                                            <Box key={group.title}>
                                                <strong
                                                    style={{
                                                        marginBottom: '8px',
                                                        display: 'block',
                                                        fontSize: '12px',
                                                        color: '#616161',
                                                    }}>
                                                    {group.title}
                                                </strong>
                                                {group.options.map((option) => {
                                                    return <MenuItem
                                                        key={option.id}
                                                        sx={{
                                                            fontSize: '12px',
                                                            borderRadius: '5px',
                                                            my: '5px',
                                                            backgroundColor: '#F7F7F7',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                backgroundColor: '#e9f1ed',
                                                            },
                                                        }}
                                                        onClick={() =>
                                                            handleOptionClick(group, option.id as string)
                                                        }
                                                    >
                                                        {option.name}
                                                    </MenuItem>
                                                })}
                                            </Box>
                                        ))}
                                    </Box>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default FilterBtn;
