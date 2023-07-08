import { FollowButton } from "./FollowButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FollowButton> = {
  title: "Atoms/buttons/FollowButton",
  component: FollowButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FollowButton>

export const 保存する: Story = {
  args: {
    innerText: "保存する",
  },
}

export const 削除する: Story = {
  args: {
    innerText: "削除する",
  },
}

export const キャンセル: Story = {
  args: {
    innerText: "キャンセル",
  },
}
