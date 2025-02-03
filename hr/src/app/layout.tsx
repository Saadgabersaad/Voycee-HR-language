import type { Metadata } from 'next'
import { CssBaseline, ThemeProvider } from '@mui/material'

import './globals.css'
import ReactQueryProvider from '@/modules/core/providers/ReactQuery'
import React from 'react'
import theme from '@/modules/core/consts/theme'
import { AppLayout } from '@/modules/core/layouts/app'
import { PositionContextProvider } from '@/modules/core/providers/IdContext'

export const metadata: Metadata = {
    title: 'Voycelink',
    description: 'Voycelink App'
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {


    return (
        <html lang='en'>
        <body>
        <PositionContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ReactQueryProvider>
                    <AppLayout>
                        {children}
                    </AppLayout>
                </ReactQueryProvider>
            </ThemeProvider>
        </PositionContextProvider>

        </body>
        </html>
    )
}
