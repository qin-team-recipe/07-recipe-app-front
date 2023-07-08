import { CopyButton } from "./CopyButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof CopyButton> = {
  title: "Atoms/buttons/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Normal: Story = {}
