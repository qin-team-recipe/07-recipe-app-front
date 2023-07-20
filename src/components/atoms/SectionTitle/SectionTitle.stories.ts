import { FONT_SIZE, HEADING, SectionTitle } from "./SectionTitle"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SectionTitle> = {
  title: "Atoms/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SectionTitle>

export const size_2xl: Story = {
  args: {
    fontSize: FONT_SIZE.XXL,
    heading: HEADING.H1,
    text: "シェフの名前（24px）",
  },
}
export const size_xl: Story = {
  args: {
    fontSize: FONT_SIZE.XL,
    heading: HEADING.H2,
    text: "注目のシェフ（20px）",
  },
}
export const size_lg: Story = {
  args: {
    fontSize: FONT_SIZE.LG,
    heading: HEADING.H3,
    text: "しまぶーシェフ（18px）",
  },
}
