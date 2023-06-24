import Link from "next/link"

import { RecipePreviewPicture } from "../../atoms/RecipePreviewPicture/RecipePreviewPicture"
import { RecipePreviewText } from "../../atoms/RecipePreviewText/RecipePreviewText"

interface RecipePreviewCardProps {
  recipe: {
    index: number
    url: string
    title: string
    content: string
  }
}

export const RecipePreviewCard = ({ recipe }: RecipePreviewCardProps) => {
  return (
    <div className="grid gap-2 justify-center w-[173px] h-[214]">
      <Link href="">
        <RecipePreviewPicture index={recipe.index} url={recipe.url}></RecipePreviewPicture>
      </Link>
      <RecipePreviewText previewTitle={recipe.title} previewContent={recipe.content}></RecipePreviewText>
    </div>
  )
}
//TODO: ボタン押下時の処理
//TODO: Likeの数を表示するコンポーネントを追加する
