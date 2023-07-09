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
    isCheckedProp: false,
    isShowDeleteButton: false,
  },
}

export const 買い物リスト_チェック済: Story = {
  args: {
    name: "チーズ",
    isCheckedProp: true,
    isShowDeleteButton: true,
  },
}
