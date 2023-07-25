import type { Meta, StoryObj } from "@storybook/react"

import { IngredientMenu } from "@/components/atoms/IngredientMenu/IngredientMenu"

const meta: Meta<typeof IngredientMenu> = {
  title: "Atoms/IngredientMenu",
  component: IngredientMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IngredientMenu>

export const 全て表示: Story = {
  args: {
    showMoveUp: true,
    showMoveDown: true,
    showEdit: true,
  },
}

export const 上に移動するのみ: Story = {
  args: {
    showMoveUp: true,
    showMoveDown: false,
  },
}

export const 下に移動するのみ: Story = {
  args: {
    showMoveUp: false,
    showMoveDown: true,
  },
}
