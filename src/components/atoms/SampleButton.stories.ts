import { Button } from "./SampleButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    primary: true,
    innerText: "Button",
  },
}

export const Secondary: Story = {
  args: {
    innerText: "Button",
  },
}

export const Large: Story = {
  args: {
    fontSize: "lg",
    innerText: "Button",
  },
}

export const Small: Story = {
  args: {
    fontSize: "sm",
    innerText: "Button",
  },
}
