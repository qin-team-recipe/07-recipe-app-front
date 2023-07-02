import { IngredientListItem } from "./IngredientListItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof IngredientListItem> = {
  title: "Atoms/IngredientListItem",
  component: IngredientListItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IngredientListItem>

export const 買い物リスト_追加済: Story = {
  args: {
    name: "キャベツ",
    description: "5〜6枚",
    isAdded: true,
  },
}
export const 買い物リスト_未追加: Story = {
  args: {
    name: "キャベツ",
    description: "5〜6枚",
    isAdded: false,
  },
}
