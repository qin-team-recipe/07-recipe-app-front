import HeaderWithBackButton from "./HeaderWithBackButton"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof HeaderWithBackButton> = {
  title: "Molecules/Header/HeaderWithBackButton",
  component: HeaderWithBackButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HeaderWithBackButton>

export const ページタイトルと戻るボタン: Story = {
  args: {
    title: "新着レシピ",
    isUseBackButton: true,
  },
}

export const ページタイトルだけ: Story = {
  args: {
    title: "編集",
    isUseBackButton: false,
  },
}

export const 下書き: Story = {
  args: {
    title: "下書き",
    isUseBackButton: true,
  },
}
