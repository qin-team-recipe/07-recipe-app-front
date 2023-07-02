import { RecipePreviewCard } from "./RecipePreviewCard"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipePreviewCard> = {
  title: "Atoms/RecipePreviewCard",
  component: RecipePreviewCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipePreviewCard>

export const Normal: Story = {
  args: {
    index: 1,
    imagePath: "sample-meal.png",
    previewTitle: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
    previewContent: "ウルトラハイパー超すごいしまぶーシェフ",
  },
}
