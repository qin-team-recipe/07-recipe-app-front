import Image from "next/image"

import { SocialMediaService } from "@/components/atoms/SocialMediaService/SocialMediaService"

export type MyRecipeDetailsTopItemsProps = {
  image: string
  recipeName: string
  recipeDetail: string
  favoriteCount: number
}
export default function MyRecipeDetailsTop() {
  const MyRecipeDetailsTopItems = {
    image: "/assets/images/food/RecipeDetailPage_sample(1).jpg",
    recipeName: "グラタン",
    recipeDetail:
      "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
    favoriteCount: 456,
  }
  return (
    <>
      <div>
        <div>
          <Image
            src={MyRecipeDetailsTopItems.image}
            alt={"MyRecipeDetailPageImage"}
            width={390}
            height={390}
            className="max-h-[390px] max-w-[390px]"
          />
        </div>
        <div className=" mb-5 flex h-12 w-[358px] gap-4 ">
          <div className="flex-auto text-xl font-bold">{MyRecipeDetailsTopItems.recipeName}</div>
          <div className="">
            <SocialMediaService />
          </div>
        </div>
        <div className="mb-2 text-sm ">{MyRecipeDetailsTopItems.recipeDetail}</div>
      </div>
      <div className="mb-3 flex gap-3 text-sm text-Mauve-11">
        <div>
          <button className=" w-14 rounded border-[1px] border-solid text-Tomato-12">公開中</button>
        </div>
        <div>{MyRecipeDetailsTopItems.favoriteCount}お気に入り</div>
      </div>
      <div className="flex">
        <button className=" mr-4 w-full flex-1 rounded border-[1px] border-solid text-Tomato-12">
          お気に入りに追加済み
        </button>
        <button className=" w-full flex-1 rounded border-[1px] border-solid ">レシピを編集</button>
      </div>
    </>
  )
}
