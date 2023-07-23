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
    text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
  },
}

export const LongText: Story = {
  args: {
    index: 22,
    text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
  },
}

export const ShortText: Story = {
  args: {
    index: 3,
    text: "食材洗う",
  },
}
