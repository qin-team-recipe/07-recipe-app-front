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
      key: "aaaaaaaa",
      platform: "youtube",
      linkTitle: "Yotube",
      linkDescription: "",
      linkDestination: "https://youtube.com/",
    },
    {
      key: "bbbbbbbbb",
      platform: "twitter",
      linkTitle: "Twitter",
      linkDescription: "",
      linkDestination: "https://twitter.com/",
    },
    {
      key: "bbbbbbbbb",
      platform: "instagram",
      linkTitle: "Instagram",
      linkDescription: "",
      linkDestination: "https://Instagram.com/",
    },
    {
      key: "ddddddddd",
      platform: "other",
      linkTitle: "サイト",
      linkDescription: "",
      linkDestination: "https://www.google.com/",
    },
  ],
}
