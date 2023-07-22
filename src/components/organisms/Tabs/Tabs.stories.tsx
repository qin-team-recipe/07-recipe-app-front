import { Tabs } from "./Tabs"
import SampleTabContent from "./_SampleTabContent"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Tabs> = {
  title: "Organisms/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const three_tabs: Story = {
  args: {
    tabItems: [
      {
        label: "すべて",
        component: <SampleTabContent bgColor="Mauve-10" />,
      },
      {
        label: "シェフ",
        component: <div>コンポーネント2</div>,
      },
      {
        label: "レシピ",
        component: <SampleTabContent bgColor="Tomato-12" />,
      },
    ],
  },
}

export const two_tabs: Story = {
  args: {
    tabItems: [
      {
        label: "作り方",
        component: <SampleTabContent bgColor="Mauve-10" />,
      },
      {
        label: "材料",
        component: <SampleTabContent bgColor="Tomato-12" />,
      },
    ],
  },
}
