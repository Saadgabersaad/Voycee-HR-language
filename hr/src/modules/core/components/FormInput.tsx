import { TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'

export const FormInput = (props: TextFieldProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            name={props.name!}
            control={control}
            rules={{
                required: `${props.label} required`,
                ...props.type === 'email' && {
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Invalid email',
                    },
                },
                ...props.type === 'phone' && {
                    pattern: {
                        value: /^\+?[0-9]+$/,
                        message: 'Invalid phone'
                    }
                }
            }}
            render={({
                         field: { onChange },
                         fieldState: { error },
                     }) => (
                <TextField
                    onChange={onChange}
                    error={!!error}
                    id={props.name}
                    size='small'
                    margin='dense'
                    fullWidth
                    helperText={error ? error.message : null}
                    label={props.label}
                    placeholder={props.placeholder}
                />
            )}
        />
    )
}
