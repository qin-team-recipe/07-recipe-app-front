import { ChefCard } from "./ChefCard"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ChefCard> = {
  title: "Atoms/ChefCard",
  component: ChefCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ChefCard>

export const 説明３行: Story = {
  args: {
    icon: "detail_hifumiChef.svg",
    name: "山田シェフ",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    args: "/",
    count: 123,
  },
}
export const 説明１行: Story = {
  args: {
    icon: "detail_hifumiChef.svg",
    name: "山田シェフ",
    text: "白ごはん.comを運営しています。",
    args: "/",
    count: 123,
  },
}
