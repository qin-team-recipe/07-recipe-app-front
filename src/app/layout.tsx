import './globals.css'

import { MantineProviderWrapper } from '@/libs/MantineProviderWrapper'
import { ReduxProvider } from '@/libs/ReduxProvider'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body >
        <ReduxProvider>
          <MantineProviderWrapper>
            {children}
          </MantineProviderWrapper>
        </ReduxProvider>
      </body>
    </html>
  )
}
