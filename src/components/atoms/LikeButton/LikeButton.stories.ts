import { LikeButton } from "./LikeButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LikeButton> = {
  title: "Atoms/LikeButton",
  component: LikeButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LikeButton>
export const ライクボタン未押下: Story = {
  args: {
    isLiked: false,
  },
}
export const ライクボタン押下: Story = {
  args: {
    isLiked: true,
  },
}
