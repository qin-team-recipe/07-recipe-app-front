"use client"

import { ReactNode, useState } from "react"

type TabProps = {
  tabItems: { label: string; component: ReactNode }[]
}

export const Tabs = ({ tabItems }: TabProps) => {
  const [activeTab, setActiveTab] = useState<string>("item1")

  return (
    <div className="w-full max-w-[480px]">
      <ul className="flex">
        {tabItems.map(({ label }, index) => {
          return (
            <li className="w-full" key={`item${index + 1}`}>
              <button
                className={[
                  "h-10 w-full text-center text-base font-bold text-Mauve-12",
                  activeTab === `item${index + 1}` && "border-0 border-b-2 border-Mauve-12",
                ].join(" ")}
                onClick={() => setActiveTab(`item${index + 1}`)}
              >
                {label}
              </button>
            </li>
          )
        })}
      </ul>

      {tabItems.map(({ component }, index) => {
        return activeTab === `item${index + 1}` ? component : null
      })}
    </div>
  )
}
