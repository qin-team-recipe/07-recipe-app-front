import { SettingButton } from "./SettingButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SettingButton> = {
  title: "Atoms/buttons/SettingButton",
  component: SettingButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SettingButton>

export const お気に入りログイン前: Story = {
  args: {},
}
