import Link from "next/link"

import { RecipePreviewPicture } from "../atoms/RecipePreviewPicture/RecipePreviewPicture"
import { RecipePreviewText } from "../atoms/RecipePreviewText/RecipePreviewText"

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
    <div className="flex flex-col justify-center w-[160px] h-[214]">
      <Link href="">
        <RecipePreviewPicture index={recipe.index} url={recipe.url}></RecipePreviewPicture>
      </Link>
      <RecipePreviewText previewTitle={recipe.title} previewContent={recipe.content}></RecipePreviewText>
    </div>
  )
}
//TODO: ボタン押下時の処理
