import { CopyButton } from "@/components/atoms/CopyButton/CopyButton"
import { RecipeStepItem, RecipeStepItemProps } from "@/components/atoms/RecipeStepItem/RecipeStepItem"

// async function fetchRecipe() {
//   const res = await fetch('', {})

//   if (!res.ok) {
//     throw new Error("Failed to fetch data in server")
//   }

//   const recipe: RecipeStepItemProps[] = await res.json()

//   return recipe
// }

export default function RecipeStep() {
  // TODO: このコンポーネント内でfetchする？後で考える
  // const recipe = fetchRecipe()

  const 仮のレシピ: RecipeStepItemProps[] = [
    {
      index: 1,
      title: "食材を切る",
      description: "じゃがいもと人参は大きめの乱切りに、玉ねぎはくし切り、白滝は洗って適当に切ります。",
    },
    {
      index: 2,
      title: "炒める",
      description: "中華鍋に油を大２入れ強火にし、肉を入れ色が変わるまで炒めたら１も入れ軽く炒めます♪",
    },
    {
      index: 3,
      title: "煮詰める",
      description:
        "煮汁の材料を入れ沸騰したら灰汁を取り白滝を入れ混ぜ中強火のまま落し蓋をし煮汁が無くなるまで約20分程煮詰めます。",
    },
    {
      index: 4,
      title: "さらに煮詰める",
      description:
        "10分煮詰めた所で一度混ぜ、再度落し蓋をして煮汁がなくなるまで様子を見ながら更に10分位煮詰めていきます。",
    },
    {
      index: 5,
      title: "蒸らす",
      description: "煮汁が無くなったら火を止め落し蓋をしたまま10分間、蒸らします♪味が更に染み込みますょ！ここ大事！",
    },
    {
      index: 6,
      title: "完成",
      description: "完成♪この位の量でも家では一瞬でなくなります(^-^;",
    },
  ]

  return (
    <div className="max-w-[480px]">
      <ul>
        {仮のレシピ.map(({ index, title, description }) => (
          <RecipeStepItem key={index} index={index} title={title} description={description} />
        ))}
      </ul>
      <CopyButton onClick={() => console.log("TODO: コピーボタン押下時の処理")} />
    </div>
  )
}
