import { RecipePreviewCard } from "./RecipePreviewCard"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipePreviewCard> = {
  title: "Molecules/RecipePreviewCard",
  component: RecipePreviewCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipePreviewCard>

export const レシピプレビュー: Story = {
  args: {
    recipe: {
      index: 1,
      url: "sample-meal.png",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
    },
  },
}
export const レシピプレビュー_長文: Story = {
  args: {
    recipe: {
      index: 1,
      url: "sample-meal.png",
      title:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ、トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content:
        "ウルトラハイパー超すごいしまぶーシェフ、ウルトラハイパー超すごいしまぶーシェフ、ウルトラハイパー超すごいしまぶーシェフ",
    },
  },
}
