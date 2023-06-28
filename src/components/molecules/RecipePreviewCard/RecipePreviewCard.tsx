import Link from "next/link"

import { FavoriteCount } from "../../atoms/FavoriteCount/FavoriteCount"
import { RecipePreviewPicture } from "../../atoms/RecipePreviewPicture/RecipePreviewPicture"
import { RecipePreviewText } from "../../atoms/RecipePreviewText/RecipePreviewText"

type RecipePreviewCardProps = {
  recipe: {
    index: number
    url: string
    title: string
    content: string
    count: number
  }
}

export const RecipePreviewCard = ({ recipe }: RecipePreviewCardProps) => {
  return (
    <div className="grid gap-2 justify-center w-[194px] h-[248px]">
      <Link href="">
        <div className="relative">
          <FavoriteCount count={recipe.count}></FavoriteCount>
        </div>
        <RecipePreviewPicture index={recipe.index} url={recipe.url}></RecipePreviewPicture>
      </Link>
      <RecipePreviewText previewTitle={recipe.title} previewContent={recipe.content}></RecipePreviewText>
    </div>
  )
}
//TODO: ボタン押下時の処理
