import Link from "next/link"

import { FavoriteCount } from "../../atoms/FavoriteCount/FavoriteCount"
import { RecipePreviewCard } from "../../atoms/RecipePreviewCard/RecipePreviewCard"

type RecipeListItemProps = {
  recipe: {
    index: number
    imagePath: string
    linkUrl: string
    title: string
    content: string
    count: number
  }
}

export const RecipeListItem = ({ recipe }: RecipeListItemProps) => {
  return (
    <Link href={"recipe.linkUrl"} className="relative">
      <RecipePreviewCard
        index={recipe.index}
        imagePath={recipe.imagePath}
        previewTitle={recipe.title}
        previewContent={recipe.content}
        size="MEDIUM"
      />
      <FavoriteCount count={recipe.count} />
    </Link>
  )
}
//TODO: ボタン押下時の処理
