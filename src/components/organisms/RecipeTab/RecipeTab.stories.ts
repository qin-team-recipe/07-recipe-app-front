import { RecipeTab } from "./RecipeTab"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipeTab> = {
  title: "Organisms/RecipeTab",
  component: RecipeTab,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipeTab>

export const レシピタブ: Story = {
  args: {
    recipe: [
      {
        index: 1,
        imagePath: "assets/images/sample-meal.png",
        linkUrl: "/recipe/1",
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
        content: "ウルトラハイパー超すごいしまぶーシェフ",
        count: 1,
      },
      {
        index: 2,
        imagePath: "assets/images/sample-meal.png",
        linkUrl: "/recipe/1",
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
        content: "ウルトラハイパー超すごいしまぶーシェフ",
        count: 2,
      },
      {
        index: 3,
        imagePath: "assets/images/sample-meal.png",
        linkUrl: "/recipe/1",
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
        content: "ウルトラハイパー超すごいしまぶーシェフ",
        count: 3,
      },
      {
        index: 4,
        imagePath: "assets/images/sample-meal.png",
        linkUrl: "/recipe/1",
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
        content: "ウルトラハイパー超すごいしまぶーシェフ",
        count: 4,
      },
      {
        index: 5,
        imagePath: "assets/images/sample-meal.png",
        linkUrl: "/recipe/1",
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
        content: "ウルトラハイパー超すごいしまぶーシェフ",
        count: 5,
      },
      {
        index: 99999,
        imagePath: "assets/images/sample-meal.png",
        linkUrl: "/recipe/1",
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
        content: "ウルトラハイパー超すごいしまぶーシェフ",
        count: 99999,
      },
    ],
  },
}
