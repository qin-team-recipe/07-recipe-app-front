import type { Meta, StoryObj } from "@storybook/react"

import { OtherChefList } from "@/components/molecules/OtherChefList/OtherChefList"

const meta: Meta<typeof OtherChefList> = {
  title: "Molecules/OtherChefList",
  component: OtherChefList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof OtherChefList>

export const シェフリスト: Story = {
  args: {
    chefs: [
      {
        id: "aaa",
        image: "/assets/images/other_chef.png",
        name: "山田シェフ",
        profile:
          "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
        url: "/",
        count: 123,
      },
      {
        id: "aaa",
        image: "/assets/images/other_chef.png",
        name: "山田シェフ",
        profile:
          "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
        url: "/",
        count: 123,
      },
      {
        id: "aaa",
        image: "/assets/images/other_chef.png",
        name: "山田シェフ",
        profile:
          "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
        url: "/",
        count: 123,
      },
    ],
  },
}
