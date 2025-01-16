import {
    ListItemText,
    Checkbox,
    Chip,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    Box,
    MenuItem,
    Theme,
    useTheme,
    SelectChangeEvent,
    SxProps,
    FormHelperText,
} from '@mui/material'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import { MultipleSelectProps } from './MultipleSelect'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

//MULTIPLE SELECT WRAPPED WITH REACT HOOK FORM
export const FormMultipleSelect = <T,>({
                                           options,
                                           name,
                                           width,
                                           placeholder,
                                       }: MultipleSelectProps) => {
    const { formState: { errors }, control } = useFormContext()

    //error from field
    const error = errors[name] as FieldError

    return (
        <div>
            <FormControl sx={{ width: width ?? '100%' }} error={!!error}>
                <InputLabel id="demo-multiple-chip-label" size="small">{placeholder}</InputLabel>
                <Controller
                    name={name}
                    control={control}
                    rules={{
                        required: 'You must select at least one',
                        validate: (value: number[]) => value.length > 0 || 'You must select at least one position',
                    }}
                    render={({ field }) => {
                        console.log(field)
                        return (
                            <Select
                                multiple
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                size="small"
                                value={field.value || []}
                                onChange={(event: SelectChangeEvent<any>) => field.onChange(event.target.value)}
                                MenuProps={MenuProps}
                                input={<OutlinedInput id="select-multiple-chip" label={placeholder} />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value: any) => (
                                            <Chip
                                                key={value}
                                                size="small"
                                                label={`Role ${value}`}
                                            />
                                        ))}
                                    </Box>
                                )}
                            >
                                {options.map((name: any) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                    >
                                        <Checkbox checked={(field.value || []).includes(name)} size="small" />
                                        <ListItemText primary={`Option ${name}`} />
                                    </MenuItem>
                                ))}
                            </Select>
                        )
                    }}
                />
                {error && <FormHelperText>{error.message}</FormHelperText>}
            </FormControl>
        </div>
    )
}