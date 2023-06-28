import Image from "next/image"

interface RecipePreviewPictureProps {
  index: number
  url: string
}

export const RecipePreviewPicture = ({ index, url }: RecipePreviewPictureProps) => {
  return <Image width={"194"} height={"173"} src={url} alt={`レシピ画像${index}`}></Image>
}
