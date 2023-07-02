"use client"

import { RecipePreviewCard } from "@/components/molecules/RecipePreviewCard/RecipePreviewCard"

export const RecipeTab = () => {
  const dummyData = [
    {
      index: 1,
      imagePath: "/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
    {
      index: 1,
      imagePath: "/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
  ]

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[400px] grid  grid-cols-2 gap-y-4 gap-x-3  justify-stretch">
          {dummyData.map((v) => (
            <RecipePreviewCard recipe={v} key={v.index}></RecipePreviewCard>
          ))}
        </div>
      </div>
    </>
  )
}

//TODO: データ取得
