import Image from "next/image"

interface RecipePreviewCardProps {
  index: number
  imagePath: string
  previewTitle: string
  previewContent: string
}

export const RecipePreviewCard = ({ index, imagePath, previewTitle, previewContent }: RecipePreviewCardProps) => {
  return (
    <>
      <Image width={"194"} height={"173"} src={imagePath} alt={`レシピ画像${index}`}></Image>
      <div className="grid items-start w-[194px] h-[46px]">
        <p className="text-Mauve-12 text-fs12 font-bold leading-3 line-clamp-2">{previewTitle}</p>
        <p className="text-Mauve-11 text-fs10 font-normal leading-[10px] line-clamp-1">{previewContent}</p>
      </div>
    </>
  )
}
