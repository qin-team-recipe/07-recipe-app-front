import { TextButton } from "./TextButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof TextButton> = {
  title: "Atoms/TextButton",
  component: TextButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TextButton>

export const Primary: Story = {
  args: {
    primary: true,
    innerText: "作成する",
  },
}

export const Secondary: Story = {
  args: {
    primary: false,
    innerText: "下書き",
  },
}

export const tertiary: Story = {
  args: {
    primary: false,
    innerText: "下書き",
    diabled: true,
  },
}
