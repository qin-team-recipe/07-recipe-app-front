import { LinkTab } from "./LinkTab"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LinkTab> = {
  title: "Organisms/LinkTab",
  component: LinkTab,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LinkTab>

export const List: Story = {
  args: [
    {
      index: 4,
      platform: "youtube",
      linkTitle: "Yotube",
      linkDescription: "",
      linkDestination: "https://youtube.com/",
    },
    {
      index: 14,
      platform: "twitter",
      linkTitle: "Twitter",
      linkDescription: "",
      linkDestination: "https://twitter.com/",
    },
    {
      index: 24,
      platform: "instagram",
      linkTitle: "Instagram",
      linkDescription: "",
      linkDestination: "https://Instagram.com/",
    },
    {
      index: 34,
      platform: "other",
      linkTitle: "サイト",
      linkDescription: "",
      linkDestination: "https://www.google.com/",
    },
  ],
}
