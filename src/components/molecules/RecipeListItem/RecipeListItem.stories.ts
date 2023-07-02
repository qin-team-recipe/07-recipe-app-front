import { RecipeListItem } from "./RecipeListItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipeListItem> = {
  title: "Molecules/RecipeListItem",
  component: RecipeListItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipeListItem>

export const レシピプレビュー: Story = {
  args: {
    recipe: {
      index: 1,
      imagePath: "sample-meal.png",
      linkUrl: "/recipe/1",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
  },
}
export const レシピプレビュー_長文: Story = {
  args: {
    recipe: {
      index: 1,
      imagePath: "sample-meal.png",
      linkUrl: "/recipe/1",
      title:
        "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ、トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content:
        "ウルトラハイパー超すごいしまぶーシェフ、ウルトラハイパー超すごいしまぶーシェフ、ウルトラハイパー超すごいしまぶーシェフ",
      count: 99999999,
    },
  },
}
