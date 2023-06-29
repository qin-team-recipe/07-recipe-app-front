import { IngredientItem } from "./IngredientItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof IngredientItem> = {
  title: "Atoms/IngredientItem",
  component: IngredientItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IngredientItem>

export const タイトルのみ_カートボタンなし: Story = {
  args: {
    name: "キャベツ",
    isUseCartButton: false,
    isAdded: false,
  },
}

export const タイトルと説明文_カートボタンなし: Story = {
  args: {
    name: "グラタン",
    description: "作成日時: 2023年4月22日",
    isUseCartButton: false,
    isAdded: false,
  },
}

export const タイトルと説明文_カートボタンあり_買い物リスト追加済: Story = {
  args: {
    name: "キャベツ",
    description: "5〜6枚",
    isUseCartButton: true,
    isAdded: true,
  },
}
export const タイトルのみ_カートボタンあり_買い物リスト未追加: Story = {
  args: {
    name: "キャベツ",
    isUseCartButton: true,
    isAdded: false,
  },
}
