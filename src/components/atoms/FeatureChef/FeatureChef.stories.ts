import { FeatureChef } from "./FeatureChef"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FeatureChef> = {
  title: "Atoms/FeatureChef",
  component: FeatureChef,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FeatureChef>

export const Primary: Story = {
  args: {
    icon: "https://e0.pxfuel.com/wallpapers/799/210/desktop-wallpaper-chef-cook.jpg",
    name: "山田シェフ",
    url: "/",
  },
}
