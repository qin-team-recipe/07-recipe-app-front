import { LINK_TYPE, LinkListItem } from "./LinkListItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LinkListItem> = {
  title: "Atoms/LinkListItem",
  component: LinkListItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LinkListItem>

export const YoutubeLinkItem: Story = {
  args: {
    platform: LINK_TYPE["YOUTUBE"],
    linkTitle: "Youtube",
    linkDestination: "https://youtube.com/",
  },
}

export const TwitterLinkItem: Story = {
  args: {
    platform: LINK_TYPE["TWITTER"],
    linkTitle: "Twitter",
    linkDestination: "https://twitter.com/",
  },
}

export const InstagramLinkItem: Story = {
  args: {
    platform: LINK_TYPE["INSTAGRAM"],
    linkTitle: "Instagram",
    linkDestination: "https://Instagram.com/",
  },
}
export const OtherLinkItem: Story = {
  args: {
    platform: LINK_TYPE["OTHER"],
    linkTitle: "サイト",
    linkDescription: "https://www.google.com/",
    linkDestination: "https://www.google.com/",
  },
}
