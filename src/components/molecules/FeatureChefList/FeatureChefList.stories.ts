import type { Meta, StoryObj } from "@storybook/react"

import { FeatureChefList } from "@/components/molecules/FeatureChefList/FeatureChefList"

const meta: Meta<typeof FeatureChefList> = {
  title: "Molecules/FeatureChefList",
  component: FeatureChefList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FeatureChefList>

export const お気に入りシェフあり: Story = {
  args: {
    chefs: [
      {
        name: "山田シェフ",
        icon: "https://picsum.photos/200",
        url: "/",
      },
      {
        name: "田中シェフ",
        icon: "https://picsum.photos/201",
        url: "/",
      },
      {
        name: "後藤シェフ",
        icon: "https://picsum.photos/202",
        url: "/",
      },
      {
        name: "しまぶー",
        icon: "https://picsum.photos/203",
        url: "/",
      },
      {
        name: "しまぶー",
        icon: "https://picsum.photos/204",
        url: "/",
      },
      {
        name: "しまぶー",
        icon: "https://picsum.photos/205",
        url: "/",
      },
      {
        name: "しまぶー",
        icon: "https://picsum.photos/206",
        url: "/",
      },
      {
        name: "しまぶー",
        icon: "https://picsum.photos/207",
        url: "/",
      },
      {
        name: "しまぶー",
        icon: "https://picsum.photos/208",
        url: "/",
      },
      {
        name: "しまぶー",
        icon: "https://picsum.photos/209",
        url: "/",
      },
    ],
  },
}
