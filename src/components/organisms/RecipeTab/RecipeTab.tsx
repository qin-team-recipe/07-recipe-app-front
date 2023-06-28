"use client"

import { RecipePreviewCard } from "@/components/molecules/RecipePreviewCard/RecipePreviewCard"

export const RecipeTab = () => {
  const dummyData = [
    {
      index: 1,
      url: "/sample-meal.png",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
    {
      index: 2,
      url: "/sample-meal.png",
      title: "testtest",
      content: "testtest",
      count: 2,
    },
    {
      index: 3,
      url: "/sample-meal.png",
      title: "testtest",
      content: "testtest",
      count: 3,
    },
    {
      index: 4,
      url: "/sample-meal.png",
      title: "testtest",
      content: "testtest",
      count: 9999,
    },
  ]

  const list = []

  for (const v of dummyData) {
    list.push(
      <div>
        <RecipePreviewCard recipe={v}></RecipePreviewCard>
      </div>,
    )
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[400px] grid  grid-cols-2 gap-y-4 gap-x-3  justify-stretch">{list}</div>
      </div>
    </>
  )
}

//TODO: データ取得
