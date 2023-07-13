import { SearchBar } from "./SearchBar"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SearchBar> = {
  title: "Atoms/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {},
}
