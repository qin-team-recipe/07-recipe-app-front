import Link from "next/link"

import { FavoriteCount } from "../../atoms/FavoriteCount/FavoriteCount"
import { RecipePreviewPicture } from "../../atoms/RecipePreviewPicture/RecipePreviewPicture"
import { RecipePreviewText } from "../../atoms/RecipePreviewText/RecipePreviewText"

type RecipePreviewCardProps = {
  recipe: {
    index: number
    imagePath: string
    linkUrl: string
    title: string
    content: string
    count: number
  }
}

export const RecipePreviewCard = ({ recipe }: RecipePreviewCardProps) => {
  return (
    <Link href={"recipe.linkUrl"} className="grid gap-2 justify-center w-[194px] h-[248px] relative">
      <RecipePreviewPicture index={recipe.index} imagePath={recipe.imagePath} />
      <RecipePreviewText previewTitle={recipe.title} previewContent={recipe.content} />
      <FavoriteCount count={recipe.count} />
    </Link>
  )
}
//TODO: ボタン押下時の処理
