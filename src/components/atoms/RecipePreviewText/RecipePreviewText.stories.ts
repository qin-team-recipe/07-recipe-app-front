import { RecipePreviewText } from "./RecipePreviewText"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipePreviewText> = {
  title: "Atoms/RecipePreviewText",
  component: RecipePreviewText,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipePreviewText>

export const Normal: Story = {
  args: {
    previewTitle: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
    previewContent: "ウルトラハイパー超すごいしまぶーシェフ",
  },
}
