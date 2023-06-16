import { Image } from "@mantine/core"

interface RecipePreviewPictureProps {
  index: number
  url: string
}

export const RecipePreviewPicture = ({ index, url }: RecipePreviewPictureProps) => {
  return <Image width={"160px"} height={"160px"} src={url} alt={`レシピ画像${index}`}></Image>
}
