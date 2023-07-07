import { SaveButton } from "./SaveButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SaveButton> = {
  title: "Atoms/buttons/SaveButton",
  component: SaveButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SaveButton>

export const 保存する: Story = {
  args: {
    innerText: "保存する",
    type: "primary",
  },
}

export const 削除する: Story = {
  args: {
    innerText: "削除する",
    type: "secondary",
  },
}

export const キャンセル: Story = {
  args: {
    innerText: "キャンセル",
    type: "secondary",
  },
}
