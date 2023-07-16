import { FavoriteCount } from "./FavoriteCount"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FavoriteCount> = {
  title: "Atoms/FavoriteCount",
  component: FavoriteCount,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FavoriteCount>

export const Normal: Story = {
  args: {
    count: 1234,
  },
}
export const 桁数1: Story = {
  args: {
    count: 1,
  },
}
export const 桁数2: Story = {
  args: {
    count: 12,
  },
}
export const 桁数6: Story = {
  args: {
    count: 123456,
  },
}
