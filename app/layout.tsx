import Sidebar from '@/components/Sidebar'
import './globals.css'
import SupabaseProvider from '@/providers/SupabaseProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import Player from '@/components/Player'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Listen to music',
}
export const revalidate = 0;
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const userSongs = await getSongsByUserId();
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToasterProvider />
                <SupabaseProvider>
                    <UserProvider>
                        <ModalProvider />
                        <Sidebar songs={userSongs}>
                            {children}
                        </Sidebar>
                        <Player />

                    </UserProvider>
                </SupabaseProvider>
            </body>
        </html >
    )
}
