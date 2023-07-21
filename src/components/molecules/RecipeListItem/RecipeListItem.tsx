import Link from "next/link"

import { FavoriteCount } from "../../atoms/FavoriteCount/FavoriteCount"
import { RecipePreviewCard } from "../../atoms/RecipePreviewCard/RecipePreviewCard"

type RecipeListItemProps = {
  recipe: {
    id: string
    imagePath: string
    linkUrl: string
    title: string
    content: string
    count: number
  }
}

export const RecipeListItem = ({ recipe }: RecipeListItemProps) => (
  <Link href={recipe.linkUrl} className="relative">
    <RecipePreviewCard
      id={recipe.id}
      imagePath={recipe.imagePath}
      previewTitle={recipe.title}
      previewContent={recipe.content}
      size="MEDIUM"
    />
    <FavoriteCount count={recipe.count} />
  </Link>
)
//TODO: ボタン押下時の処理
