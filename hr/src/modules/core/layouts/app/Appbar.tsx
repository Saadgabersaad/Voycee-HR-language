import { Box, AppBar, Toolbar, Button } from '@mui/material'
import { Flex } from 'modules/core/components/flex'
import { Logo } from 'modules/core/components/logo'
import { SearchInput } from './Search'
import { User } from './User'

export const AppHeader = () => {
    return (
        <Box sx={{ bgcolor: 'grey.100' }}>
            <AppBar position='static' color='transparent' sx={{ boxShadow: 'none' }}>
                <Toolbar sx={{
                    justifyContent: 'space-between'
                }}>
                    <Logo />
                    <SearchInput tableSearch={false} />
                    <Flex gap={2} alignItems='center'>
                        <User />
                    </Flex>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
