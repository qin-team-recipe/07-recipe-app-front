import { IngredientListItem } from "./IngredientListItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof IngredientListItem> = {
  title: "Atoms/IngredientListItem",
  component: IngredientListItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IngredientListItem>

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
