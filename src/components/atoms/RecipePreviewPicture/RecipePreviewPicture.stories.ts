import { RecipePreviewPicture } from "./RecipePreviewPicture"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipePreviewPicture> = {
  title: "Atoms/RecipePreviewPicture",
  component: RecipePreviewPicture,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipePreviewPicture>

export const Normal: Story = {
  args: {
    index: 1,
    url: "sample-meal.png",
  },
}
