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
      id: "aaaaaaaa",
      platform: "youtube",
      linkTitle: "Yotube",
      linkDescription: "",
      linkDestination: "https://youtube.com/",
    },
    {
      id: "bbbbbbbbb",
      platform: "twitter",
      linkTitle: "Twitter",
      linkDescription: "",
      linkDestination: "https://twitter.com/",
    },
    {
      id: "bbbbbbbbb",
      platform: "instagram",
      linkTitle: "Instagram",
      linkDescription: "",
      linkDestination: "https://Instagram.com/",
    },
    {
      id: "ddddddddd",
      platform: "other",
      linkTitle: "サイト",
      linkDescription: "",
      linkDestination: "https://www.google.com/",
    },
  ],
}
