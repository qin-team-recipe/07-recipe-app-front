import "./globals.css"

import { Navigation } from "../components/molecules/Navigation/Navigation"

import { MantineProviderWrapper } from "@/libs/MantineProviderWrapper"
import { ReduxProvider } from "@/libs/ReduxProvider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="h-screen w-full bg-Mauve-01 md:mx-auto md:w-[480px] md:border md:border-Mauve-06">
        <ReduxProvider>
          <MantineProviderWrapper>
            <div className="mx-4 my-2 pb-10">{children}</div>
            <div className="md:hidden">
              <Navigation />
            </div>
          </MantineProviderWrapper>
        </ReduxProvider>
      </body>
    </html>
  )
}
