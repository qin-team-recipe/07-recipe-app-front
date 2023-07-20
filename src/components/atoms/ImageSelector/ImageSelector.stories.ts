import { ImageSelector } from "./ImageSelector"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ImageSelector> = {
  title: "Atoms/ImageSelector",
  component: ImageSelector,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ImageSelector>

export const Normal: Story = {
  args: {},
}
