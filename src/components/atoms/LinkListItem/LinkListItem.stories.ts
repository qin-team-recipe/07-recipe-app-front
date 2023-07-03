import { LinkListItem, LINK_TYPE } from "./LinkListItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LinkListItem> = {
  title: "Atoms/LinkListItem",
  component: LinkListItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LinkListItem>

export const TwitterLinkItem: Story = {
  args: {
    linkType: LINK_TYPE["TWITTER"],
    linkTitle: "Twitter",
    linkDiscription: "@username",
    linkDestination: "https://twitter.com/",
  },
}

export const InstagramLinkItem: Story = {
  args: {
    linkType: LINK_TYPE["INSTAGRAM"],
    linkTitle: "Instagram",
    linkDiscription: "@username",
    linkDestination: "https://Instagram.com/",
  },
}
export const OtherLinkItem: Story = {
  args: {
    linkType: LINK_TYPE["OTHER"],
    linkTitle: "サイト",
    linkDiscription: "https://www.google.com/",
    linkDestination: "https://www.google.com/",
  },
}
