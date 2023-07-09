import { FollowOrFavoriteButton } from "./FollowOrFavoriteButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FollowOrFavoriteButton> = {
  title: "Atoms/buttons/FollowOrFavoriteButton",
  component: FollowOrFavoriteButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FollowOrFavoriteButton>

export const フォローする: Story = {
  args: {
    type: "follow",
    isFollowOrFavorite: false,
  },
}

export const フォロー中: Story = {
  args: {
    type: "follow",
    isFollowOrFavorite: true,
  },
}

export const お気に入りに追加: Story = {
  args: {
    type: "favorite",
    isFollowOrFavorite: false,
  },
}

export const お気に入りから削除: Story = {
  args: {
    type: "favorite",
    isFollowOrFavorite: true,
  },
}
