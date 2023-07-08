import { BackButton } from "./BackButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof BackButton> = {
  title: "Atoms/buttons/BackButton",
  component: BackButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BackButton>

export const Black: Story = {
  args: {
    color: "black",
  },
}

export const White: Story = {
  args: {
    color: "white",
  },
}
