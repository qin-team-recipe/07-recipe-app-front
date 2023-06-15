import { MyReceipeHeader } from "./MyReceipeHeader"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof MyReceipeHeader> = {
  title: "Atoms/MyReceipeHeader",
  component: MyReceipeHeader,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MyReceipeHeader>

export const 下書きレシピあり_入力あり: Story = {
  args: {
    isExistDraft: true,
    isEditing: true,
  },
}

export const 下書きレシピあり_入力なし: Story = {
  args: {
    isExistDraft: true,
    isEditing: false,
  },
}

export const 下書きレシピなし_入力あり: Story = {
  args: {
    isExistDraft: false,
    isEditing: true,
  },
}

export const 下書きレシピなし_入力なし: Story = {
  args: {
    isExistDraft: false,
    isEditing: false,
  },
}
