import { MyReceipeHeader } from "./MyReceipeHeader"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof MyReceipeHeader> = {
  title: "Atoms/MyReceipeHeader",
  component: MyReceipeHeader,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MyReceipeHeader>

export const Primary: Story = {
  args: {
    isEdited: false,
  },
}

export const Secondary: Story = {
  args: {
    isEdited: true,
  },
}
