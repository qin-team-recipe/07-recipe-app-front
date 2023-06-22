import { Tab } from "./Tab"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Tab> = {
  title: "Organisms/Tab",
  component: Tab,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tab>

export const Normal: Story = {
  args: {
    tabItems: [
      {
        label: "ラベル1",
        children: <div>aaa</div>,
      },
      {
        label: "ラベル2",
        children: <div>bbb</div>,
      },
      {
        label: "ラベル3",
        children: <div>ccc</div>,
      },
    ],
  },
}
