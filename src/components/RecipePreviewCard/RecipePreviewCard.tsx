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
    <>
      <div className="flex flex-col justify-center items-start w-[160px] h-[214px] gap-[8px]">
        <a href="" target="_blank" className="m-0 p-0">
          <RecipePreviewPicture index={recipe.index} url={recipe.url}></RecipePreviewPicture>
        </a>
        <RecipePreviewText previewTitle={recipe.title} previewContent={recipe.content}></RecipePreviewText>
      </div>
    </>
  )
}
//TODO: ボタン押下時の処理
