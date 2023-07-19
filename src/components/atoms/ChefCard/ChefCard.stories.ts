import { ChefCard } from "./ChefCard"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ChefCard> = {
  title: "Atoms/ChefCard",
  component: ChefCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ChefCard>

export const Normal: Story = {
  args: {}
}
