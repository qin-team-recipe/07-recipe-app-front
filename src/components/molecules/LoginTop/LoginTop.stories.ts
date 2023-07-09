import { LoginTop } from "@/components/molecules/LoginTop/LoginTop"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LoginTop> = {
  title: "Molecules/LoginTop",
  component: LoginTop,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LoginTop>

export const お気に入りでのログイン画面: Story = {
  args: {
    type: "favorite",
  },
}

export const お買い物リストでのログイン画面: Story = {
  args: {
    type: "shopping",
  },
}
