import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
    SelectChangeEvent,
    SelectProps as MUISelectProps
} from '@mui/material'
import React from 'react'

export type SelectProps = MUISelectProps & {
    options: SelectOption[]
    labelId?: string
}

export type SelectOption = {
    label: string
    value: string
}


export const selectAdapter = (label: string, value: string) => {
    return {
        label,
        value
    }
}

export const Select = (props: SelectProps) => {
    const { options, labelId, ...rest } = props

    const [value, setValue] = React.useState<string>('')

    const handleChange = (event: SelectChangeEvent<any>) => {
        setValue(event.target.value as string)
    }

    return (
        <FormControl fullWidth>
            <InputLabel id={labelId!} size='small'>{props.label}</InputLabel>
            <MuiSelect
                id={labelId!}
                size='small'
                value={value}
                onChange={handleChange}
                {...rest}
            >
                {options.map(({ value, label }) => (
                    <MenuItem value={value} key={value}>{label}</MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    )
}