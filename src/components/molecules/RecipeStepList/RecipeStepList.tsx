import { RecipeStepItem } from "@/components/atoms/RecipeStepItem/RecipeStepItem"
import { CopyButton } from "@/components/atoms/buttons/CopyButton/CopyButton"

export type RecipeStepListProps = {
  index: number
  text: string
}

export const RecipeStepList = () => {
  const RecipeStepItems = [
    {
      index: 1,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
    {
      index: 2,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
    {
      index: 3,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
    {
      index: 4,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
    {
      index: 5,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
    {
      index: 6,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
    {
      index: 7,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
    {
      index: 8,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
    },
  ]
  return (
    <div>
      {RecipeStepItems.map((props) => (
        <div key={props.index}>
          <RecipeStepItem index={props.index} text={props.text} />
        </div>
      ))}
      <CopyButton />
    </div>
  )
}
