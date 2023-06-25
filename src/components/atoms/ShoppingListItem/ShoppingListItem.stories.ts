import { ShoppingListItem } from "./ShoppingListItem"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ShoppingListItem> = {
  title: "Atoms/ShoppingListItem",
  component: ShoppingListItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ShoppingListItem>
export const 買い物リスト_未チェック: Story = {
  args: {
    name: "キャベツ",
    description: "5〜6枚",
    isCheckedProp: false,
  },
}

export const 買い物リスト_チェック済: Story = {
  args: {
    name: "チーズ",
    description: "100g",
    isCheckedProp: true,
  },
}
