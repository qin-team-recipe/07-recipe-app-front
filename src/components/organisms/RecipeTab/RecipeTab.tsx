"use client"

import { RecipeListItem } from "@/components/molecules/RecipeListItem/RecipeListItem"

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
      index: 2,
      imagePath: "/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
    {
      index: 3,
      imagePath: "/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
  ]

  return (
    <div className="w-[358px] mx-4 my-5 grid  grid-cols-2 gap-y-4 gap-x-3 ">
      {dummyData.map((v) => (
        <RecipeListItem recipe={v} key={v.index}></RecipeListItem>
      ))}
    </div>
  )
}

//TODO: データ取得
