'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export function SearchInput({ tableSearch, onSearch }: { tableSearch: boolean, onSearch(s: string): void }) {
    return (
        <Paper
            component='form'
            sx={{
                p: '0px px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                boxShadow: '0px 1px 3px 0px #0000001F',
            }}
        >
            <InputBase
                onChange={(e) => {
                    onSearch(e.target.value.toLowerCase())
                }}
                sx={{
                    ml: 1,
                    flex: 1,
                    fontSize: 14,
                }}
                placeholder={tableSearch ? 'Search in table' : 'Search for a page'}
                inputProps={{
                    'aria-label': tableSearch ? 'search in table' : 'search for a page',
                }}
            />
            <IconButton
                type='button'
                sx={{ p: '7px' }}
                aria-label='search'
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
