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
    likeIcon: "heart.svg",
    count: 1234,
  },
}
