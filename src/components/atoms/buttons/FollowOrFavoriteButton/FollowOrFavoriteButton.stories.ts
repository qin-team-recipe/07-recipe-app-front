import { BUTTON_TYPE, FollowOrFavoriteButton } from "./FollowOrFavoriteButton"

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
    buttonType: BUTTON_TYPE.FOLLOW,
    isFollowOrFavorite: false,
  },
}

export const フォロー中: Story = {
  args: {
    buttonType: BUTTON_TYPE.FOLLOW,
    isFollowOrFavorite: true,
  },
}

export const お気に入りに追加: Story = {
  args: {
    buttonType: BUTTON_TYPE.FAVORITE,
    isFollowOrFavorite: false,
  },
}

export const お気に入りから削除: Story = {
  args: {
    buttonType: BUTTON_TYPE.FAVORITE,
    isFollowOrFavorite: true,
  },
}
