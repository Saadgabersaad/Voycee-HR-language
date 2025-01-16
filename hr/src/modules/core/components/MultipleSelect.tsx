import { Select, MenuItem, OutlinedInput, SelectChangeEvent, FormControl, InputLabel, useTheme, Theme } from '@mui/material'
import { SelectOption } from './Select'
import { useState } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export type MultipleSelectProps = {
    options: SelectOption[]
    name: string
    placeholder: string
    width?: number | string
    defaultOpen?: boolean
    values?: SelectOption[]
    size?: 'small' | 'medium'
    onChange?(option: SelectChangeEvent<SelectOption[]>): void
}

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

//RAW MULTIPLE SELECT
export function MultipleSelect({
                                   size = 'medium',
                                   width = 200,
                                   defaultOpen = false,
                                   options,
                                   values,
                                   onChange
                               }: MultipleSelectProps) {
    return (
        <div>
            <FormControl sx={{ m: 0, width: 250 }}>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    size={size}
                    value={values}
                    sx={{ width }}
                    onChange={onChange}
                    defaultOpen={defaultOpen}
                    input={<OutlinedInput label="Name" size={size} />}
                    MenuProps={MenuProps}
                >
                    {options?.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
