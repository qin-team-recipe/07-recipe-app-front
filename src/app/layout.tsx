import "./globals.css"

import { Navigation } from "../components/molecules/Navigation/Navigation"

import { MantineProviderWrapper } from "@/libs/MantineProviderWrapper"
import { ReduxProvider } from "@/libs/ReduxProvider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ReduxProvider>
          <MantineProviderWrapper>
            <div className="mx-4 my-2 bg-Mauve-01">{children}</div>
            <Navigation />
          </MantineProviderWrapper>
        </ReduxProvider>
      </body>
    </html>
  )
}
