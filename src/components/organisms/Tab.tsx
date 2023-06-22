"use client"

import { createContext, useMemo, useState, useContext, FC, ReactNode, ReactElement } from "react"

type TabKey = string
type TabLabel = string

type TabLabelProps = {
  defaultKey: TabKey
  children: ReactElement<TabContentsProps>[]
}

type TabLabelItem = {
  tabKey: TabKey
  label: TabLabel
}

type TabContextState = {
  activeKey: TabKey
}

const TabContext = createContext<TabContextState>({
  activeKey: "",
})

export const TabLabel: FC<TabLabelProps> = ({ defaultKey, children }) => {
  const [activeKey, setActiveKey] = useState(defaultKey)

  const tabLabelItems = useMemo<TabLabelItem[]>(() => {
    const headerArray: TabLabelItem[] = []

    console.log("tanaka children", children)

    console.log("tanaka Array.isArray(children)", Array.isArray(children))

    children.forEach((c) => {
      headerArray.push({
        tabKey: c.props.tabKey,
        label: c.props.label,
      })
    })

    return headerArray
  }, [children])

  return (
    <TabContext.Provider value={{ activeKey }}>
      <ul className="flex">
        {tabLabelItems.map(({ tabKey, label }) => {
          return (
            <li className="px-4" key={tabKey}>
              <button className="" onClick={() => setActiveKey(tabKey)}>
                {label}
              </button>
            </li>
          )
        })}
      </ul>
      {children}
    </TabContext.Provider>
  )
}

type TabContentsProps = {
  tabKey: TabKey
  label: TabLabel
  children: ReactNode
}

export const TabContents: FC<TabContentsProps> = ({ tabKey, children }) => {
  const { activeKey } = useContext(TabContext)
  return activeKey === tabKey ? <div>{children}</div> : null
}

type TabProps = {
  tabItems: { label: string; children: ReactNode }[]
}

export const Tab = ({ tabItems }: TabProps) => {
  return (
    <TabLabel defaultKey="item1">
      {tabItems.map((item, index) => (
        <TabContents tabKey={`item${index + 1}`} label={item.label} key={index}>
          {item.children}
        </TabContents>
      ))}
    </TabLabel>
  )
}
