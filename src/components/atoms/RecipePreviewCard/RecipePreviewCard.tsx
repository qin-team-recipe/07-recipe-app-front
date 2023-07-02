import Image from "next/image"

const W_SIZE = {
  SMALL: "160",
  MEDIUM: "173",
  LARGE: "218",
} as const

const H_SIZE = {
  SMALL: "214",
  MEDIUM: "227",
  LARGE: "248",
} as const

type RecipePreviewCardProps = Required<{
  index: number
  imagePath: string
  previewTitle: string
  previewContent: string
  size: keyof typeof W_SIZE
}>

export const RecipePreviewCard = ({ index, imagePath, previewTitle, previewContent, size }: RecipePreviewCardProps) => {
  return (
    <>
      <Image width={W_SIZE[size]} height={H_SIZE[size]} src={imagePath} alt={`レシピ画像${index}`}></Image>

      <p
        className={`text-Mauve-12 text-fs12 font-bold leading-3 line-clamp-2 w-[${W_SIZE[size]}px] h-[${H_SIZE[size]}px]`}
      >
        {previewTitle}
      </p>
      <p
        className={`text-Mauve-11 text-fs10 font-normal leading-[10px] line-clamp-1  w-[${W_SIZE[size]}px] h-[${H_SIZE[size]}px]`}
      >
        {previewContent}
      </p>
    </>
  )
}
