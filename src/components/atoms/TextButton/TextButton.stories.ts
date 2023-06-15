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
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    primary: false,
    innerText: "下書き",
    disabled: false,
  },
}

export const Primary_and_Disabled: Story = {
  args: {
    primary: true,
    innerText: "作成する",
    disabled: true,
  },
}

// これは実際に使われることはないかも
export const Secondary_and_Disabled: Story = {
  args: {
    primary: false,
    innerText: "下書き",
    disabled: true,
  },
}
