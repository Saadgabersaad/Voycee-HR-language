import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    placeholder?: string
    onSearch(value: string): void
    disableForm?: boolean
    width?: number
}

export function Search({
                           placeholder,
                           disableForm,
                           width,
                           onSearch
                       }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value)
    }

    return (
        <Paper
            {...disableForm ? { component: 'div' } : { component: 'form' }}
            sx={{
                p: '0px 3px',
                display: 'flex',
                alignItems: 'center',
                width: width || 320,
                boxShadow: '0px 1px 3px 0px #0000001F',
            }}
        >
            <IconButton
                type='button'
                sx={{ p: '7px' }}
                aria-label='search'
            >
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    fontSize: 14,
                }}
                placeholder={`Search ${placeholder ? `in ${placeholder}` : ''}`}
                inputProps={{ 'aria-label': 'search in table' }}
                onChange={handleChange}
            />
        </Paper>
    );
}
