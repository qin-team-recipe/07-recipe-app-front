import RecipeStep from "./RecipeStep"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipeStep> = {
  title: "Molecules/RecipeStep",
  component: RecipeStep,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipeStep>

export const Normal: Story = {}
