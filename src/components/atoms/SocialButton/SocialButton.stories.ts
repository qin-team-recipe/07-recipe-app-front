import { SocialButton } from "./SocialButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SocialButton> = {
  title: "Atoms/SocialButton",
  component: SocialButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SocialButton>

export const Googleでログイン: Story = {
  args: {
    platform: "Google",
  },
}

export const Appleでログイン: Story = {
  args: {
    platform: "Apple",
  },
}
