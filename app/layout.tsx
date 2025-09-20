import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alchirak Solutions',
  description: 'Платформы лояльности и подписные сервисы для телеком-операторов',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  )
}