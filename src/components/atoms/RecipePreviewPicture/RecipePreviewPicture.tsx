import Image from "next/image"

interface RecipePreviewPictureProps {
  index: number
  imagePath: string
}

export const RecipePreviewPicture = ({ index, imagePath }: RecipePreviewPictureProps) => {
  return <Image width={"194"} height={"173"} src={imagePath} alt={`レシピ画像${index}`}></Image>
}
