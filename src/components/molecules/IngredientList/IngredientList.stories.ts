import { IngredientList } from "./IngredientList"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof IngredientList> = {
  title: "Molecules/IngredientList",
  component: IngredientList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IngredientList>

export const Normal: Story = {
  args: {
    servingOfNumber: 5,
  },
}
