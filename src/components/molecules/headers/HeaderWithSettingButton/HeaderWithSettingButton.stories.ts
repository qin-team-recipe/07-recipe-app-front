import HeaderWithBackButton from "./HeaderWithSettingButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof HeaderWithBackButton> = {
  title: "Molecules/headers/HeaderWithBackButton",
  component: HeaderWithBackButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HeaderWithBackButton>

export const ページタイトルと設定ページボタン: Story = {
  args: {
    title: "お気に入り",
  },
}
