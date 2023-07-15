import { DetailTop } from "@/components/atoms/DetailTop/DetailTop"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DetailTop> = {
  title: "Atoms/DetailTop",
  component: DetailTop,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DetailTop>

export const シェフ: Story = {
  args: {
    name: "山田シェフ",
    content:
      "初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！ 絶賛発売中！",
    url: "detail_top_chef.jpg",
  },
}
export const レシピ: Story = {
  args: {
    name: "グラタン",
    content:
      "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
    url: "detail_top_gratin.jpg",
  },
}
