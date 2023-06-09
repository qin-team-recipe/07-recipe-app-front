import { CircleChef } from "./CircleChef"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof CircleChef> = {
  title: "Atoms/CircleChef",
  component: CircleChef,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CircleChef>

export const Primary: Story = {
  args: {
    icon: "https://picsum.photos/200",
    name: "山田シェフ",
    url: "/",
  },
}
