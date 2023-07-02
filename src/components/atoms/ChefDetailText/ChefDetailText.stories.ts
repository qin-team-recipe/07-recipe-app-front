import { ChefDetailText } from "@/components/atoms/ChefDetailText/ChefDetailText"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ChefDetailText> = {
  title: "Atoms/ChefDetailText",
  component: ChefDetailText,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ChefDetailText>

export const normal: Story = {
  args: {
    name: "山田シェフ",
    content:
      "初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！ 絶賛発売中！",
  },
}
