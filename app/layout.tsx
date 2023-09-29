import Sidebar from '@/components/Sidebar'
import './globals.css'
import SupabaseProvider from '@/providers/SupabaseProvider'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Listen to music',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SupabaseProvider>

                    <Sidebar>
                        {children}
                    </Sidebar>
                </SupabaseProvider>

            </body>
        </html >
    )
}
