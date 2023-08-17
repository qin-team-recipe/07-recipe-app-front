import { SOCIAL_TYPE, SocialMediaService } from "./SocialMediaService"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SocialMediaService> = {
  title: "Atoms/ SocialMediaService",
  component: SocialMediaService,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SocialMediaService>

export const 全てのSNSがある場合: Story = {
  args: {},
}
