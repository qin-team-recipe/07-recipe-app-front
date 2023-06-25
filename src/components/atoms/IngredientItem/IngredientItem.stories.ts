import { IngredientItem } from "./IngredientItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof IngredientItem> = {
  title: "Atoms/IngredientItem",
  component: IngredientItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IngredientItem>

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
