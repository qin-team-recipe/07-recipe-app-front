import { AddButton } from "./AddButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AddButton> = {
  title: "Atoms/buttons/AddButton",
  component: AddButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AddButton>

export const Normal: Story = {
  args: {
    innerText: "材料",
  },
}
