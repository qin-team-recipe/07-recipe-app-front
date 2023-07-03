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
      index: 14,
      linkType: "TWITTER",
      linkTitle: "Twitter",
      linkDiscription: "@username",
      linkDestination: "https://twitter.com/",
    },
    {
      index: 24,
      linkType: "INSTAGRAM",
      linkTitle: "Instagram",
      linkDiscription: "@username",
      linkDestination: "https://Instagram.com/",
    },
    {
      index: 34,
      linkType: "OTHER",
      linkTitle: "サイト",
      linkDiscription: "https://www.google.com/",
      linkDestination: "https://www.google.com/",
    },
  ],
}
