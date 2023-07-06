import { ReactNode } from 'react'
import './globals.css'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  weight: ['400', '700', '600', '500', '800'],
  variable: '--plus-jakarta-sans',
})

export const metadata = {
  title: 'Geração de leads',
  description: 'Menos conversinha, mais conversão',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>{children}</body>
    </html>
  )
}
