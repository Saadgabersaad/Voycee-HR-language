import { TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type TextAreaProps = TextFieldProps & {
    rows?: number; // Para especificar el número de filas del textarea
}

export const FormTextArea = (props: TextAreaProps) => {
    const { control } = useFormContext();

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
                        message: 'Invalid phone',
                    },
                },
            }}
            render={({
                         field: { onChange, value },
                         fieldState: { error },
                     }) => (
                <TextField
                    onChange={onChange}
                    value={value || ''}
                    error={!!error}
                    id={props.name}
                    size="small"
                    margin="dense"
                    fullWidth
                    multiline // Propiedad clave para que sea un textarea
                    rows={props.rows || 4} // Número de filas por defecto
                    helperText={error ? error.message : null}
                    label={props.label}
                    placeholder={props.placeholder}
                />
            )}
        />
    );
};
