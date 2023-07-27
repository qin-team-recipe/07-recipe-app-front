import { RecipeList } from "./RecipeList"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipeList> = {
  title: "Molecules/RecipeList",
  component: RecipeList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipeList>

export const 縦並び: Story = {
  args: {
    horizontalScroll: false,
  },
}

export const 横並び: Story = {
  args: {
    horizontalScroll: true,
  },
}
