import { Box, Typography } from '@mui/material'
import { Flex } from '@/modules/core/components/flex'

type HeadingProps = {
    title: string
    description: string
    children: React.ReactNode
}

export const Heading = ({
                            title,
                            description,
                            children
                        }: HeadingProps) => {
    return (
        <Flex justifyContent='space-between'>
            <Box>
                <Typography fontWeight='bold' fontSize={'30px'} variant='h4' component='h2'>
                    {title}
                </Typography>
                <Typography sx={{ color: 'grey.600' }}>
                    {description}
                </Typography>
            </Box>
            {children}
        </Flex>
    )
}