import { RecipeListItem } from "@/components/molecules/RecipeListItem/RecipeListItem"

type RecipeListProps = {
  horizontalScroll?: boolean
}
export const RecipeList = (props: RecipeListProps) => {
  const dummyData = [
    {
      id: "11111",
      imagePath: "/assets/images/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
    {
      id: "2222222",
      imagePath: "/assets/images/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
    {
      id: "3333333",
      imagePath: "/assets/images/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
    {
      id: "4444444",
      imagePath: "/assets/images/sample-meal.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1,
    },
  ]

  return (
    <ul
      className={
        (props.horizontalScroll ? "flex flex-nowrap overflow-x-auto " : "flex flex-wrap") +
        " max-w-[480px] gap-4  justify-between"
      }
    >
      {dummyData.map((v) => (
        <li key={v.id} className="max-w-[173px] min-w-[173px]">
          <RecipeListItem recipe={v} />
        </li>
      ))}
    </ul>
  )
}

//TODO: データ取得
