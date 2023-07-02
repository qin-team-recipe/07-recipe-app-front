import { RecipeStepItem } from "./RecipeStepItem"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RecipeStepItem> = {
  title: "Atoms/RecipeStepItem",
  component: RecipeStepItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipeStepItem>

export const Normal: Story = {
  args: {
    index: 1,
    title:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    description:
      "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
  },
}

export const LongText: Story = {
  args: {
    index: 22,
    title:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    description:
      "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
  },
}

export const ShortText: Story = {
  args: {
    index: 3,
    title: "食材洗う",
    description: "いい感じに洗う",
  },
}
