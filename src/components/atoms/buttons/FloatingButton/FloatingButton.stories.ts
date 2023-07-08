import { FloatingButton } from "./FloatingButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FloatingButton> = {
  title: "Atoms/buttons/FloatingButton",
  component: FloatingButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FloatingButton>

export const Normal: Story = {}
