import Image from "next/image"

const PIC_SIZE = {
  SMALL: "160",
  MEDIUM: "173",
  LARGE: "218",
} as const

const H_SIZE = {
  SMALL: "214",
  MEDIUM: "229",
  LARGE: "272",
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
      <p className="my-2 line-clamp-2 text-fs12 font-bold leading-3 text-Mauve-12">{previewTitle}</p>
      <p className="line-clamp-1 text-fs10 font-normal leading-[10px] text-Mauve-11">{previewContent}</p>
    </div>
  )
}
