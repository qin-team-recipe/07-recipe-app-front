import { Navigation } from "./Navigation"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Navigation> = {
  title: "Molecules/Navigation",
  component: Navigation,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Navigation>

export const 検索ページ: Story = {
  args: {
    nowSlug: "",
  },
}
export const お気に入りページ: Story = {
  args: {
    nowSlug: "favorite",
  },
}
export const お買い物ページ: Story = {
  args: {
    nowSlug: "shopping",
  },
}
