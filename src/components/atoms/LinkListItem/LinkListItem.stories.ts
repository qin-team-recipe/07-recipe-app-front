import { LinkListItem } from "./LinkListItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LinkListItem> = {
  title: "Atoms/LinkListItem",
  component: LinkListItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LinkListItem>

export const LinkItem: Story = {
  args: {
    linkDestination: "https://www.google.com/",
  },
}
