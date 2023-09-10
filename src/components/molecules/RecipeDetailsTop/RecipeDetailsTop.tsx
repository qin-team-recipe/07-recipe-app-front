import Image from "next/image"
import Link from "next/link"

import { SocialMediaService } from "@/components/atoms/SocialMediaService/SocialMediaService"

export type RecipeDetailsTopItemsProps = {
  image: string
  name: string
  recipeName: string
  recipeDetail: string
  favoriteCount: number
}
export default function RecipeDetailsTop() {
  const RecipeDetailsTopItems = {
    image: "/assets/images/food/RecipeDetailPage_sample(1).jpg",
    name: "しまぶー",
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
            src={RecipeDetailsTopItems.image}
            alt={"RecipeDetailPageImage"}
            width={390}
            height={390}
            className="max-h-[390px] max-w-[390px]"
          />
        </div>
        <div className=" mb-5 flex h-12 w-[358px] gap-4 ">
          <div className="flex-auto text-xl font-bold">{RecipeDetailsTopItems.recipeName}</div>
          <div className="">
            <SocialMediaService />
          </div>
        </div>
        <div className="mb-2 text-sm ">{RecipeDetailsTopItems.recipeDetail}</div>
      </div>
      <div className="mb-3 flex gap-3 text-sm text-Mauve-11">
        <div>
          <Link href={"/ChefPage"}>
            <h1>{RecipeDetailsTopItems.name}シェフ</h1>
          </Link>
        </div>
        <div>{RecipeDetailsTopItems.favoriteCount}お気に入り</div>
      </div>
    </>
  )
}
