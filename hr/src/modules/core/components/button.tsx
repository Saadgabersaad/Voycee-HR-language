import {
    Button as MuiButton,
    ButtonProps,
    CircularProgress
} from '@mui/material'

type Props = ButtonProps & {
    loading?: boolean
}

export const Button = (props: Props) => {
    const { children, loading, ...rest } = props

    return (
        <MuiButton
            {...rest}
            {...loading && {
                startIcon: <CircularProgress size={20} sx={{ mx: .5 }} />
            }}
            sx={{
                ...rest?.sx,
                textTransform: 'capitalize',
                opacity: loading ? .7 : 1,
                pointerEvents: loading ? 'none' : 'auto'
            }}
        >
            {children}
        </MuiButton>
    )
}
