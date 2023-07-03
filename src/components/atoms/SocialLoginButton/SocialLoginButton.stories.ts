import { SocialLoginButton } from "./SocialLoginButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SocialLoginButton> = {
  title: "Atoms/SocialLoginButton",
  component: SocialLoginButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SocialLoginButton>

export const Googleでログイン: Story = {
  args: {
    platform: "google",
  },
}

export const Appleでログイン: Story = {
  args: {
    platform: "apple",
  },
}
