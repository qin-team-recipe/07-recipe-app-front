import Image from "next/image"

const PIC_SIZE = {
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
  size: keyof typeof PIC_SIZE
}>

export const RecipePreviewCard = ({ index, imagePath, previewTitle, previewContent, size }: RecipePreviewCardProps) => {
  return (
    <div className={`w-[${PIC_SIZE[size]}px] h-[${H_SIZE[size]}px]`}>
      <Image width={PIC_SIZE[size]} height={PIC_SIZE[size]} src={imagePath} alt={`レシピ画像${index}`}></Image>
      <p className="text-Mauve-12 text-fs12 my-2 font-bold leading-3 line-clamp-2">{previewTitle}</p>
      <p className="text-Mauve-11 text-fs10 font-normal leading-[10px] line-clamp-1">{previewContent}</p>
    </div>
  )
}
