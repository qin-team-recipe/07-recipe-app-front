"use client"

import { useState, ReactNode } from "react"

type TabProps = {
  tabItems: { label: string; component: ReactNode }[]
}

export const Tab = ({ tabItems }: TabProps) => {
  const [activeTab, setActiveTab] = useState<string>("item1")

  return (
    <div className="max-w-[480px] w-full">
      <ul className="flex">
        {tabItems.map(({ label }, index) => {
          return (
            <li className="w-full" key={`item${index + 1}`}>
              <button
                className={[
                  "w-full h-10 text-fs16 text-Mauve-12 text-center font-bold",
                  activeTab === `item${index + 1}` && "border-b-2 border-0 border-Mauve-12",
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
