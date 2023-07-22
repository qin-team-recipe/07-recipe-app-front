import "./globals.css"

import { Navigation } from "../components/molecules/Navigation/Navigation"

import { MantineProviderWrapper } from "@/libs/MantineProviderWrapper"
import { ReduxProvider } from "@/libs/ReduxProvider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-Mauve-01 md:w-[480px] h-[100dvh] mx-auto ">
        <ReduxProvider>
          <MantineProviderWrapper>
            <div className="mx-4 my-2">{children}</div>
            <div className="md:hidden">
              <Navigation />
            </div>
          </MantineProviderWrapper>
        </ReduxProvider>
      </body>
    </html>
  )
}
