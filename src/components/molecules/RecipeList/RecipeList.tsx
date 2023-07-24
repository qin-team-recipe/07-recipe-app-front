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
        " max-w-[480px] justify-between  gap-4"
      }
    >
      {dummyData.map((recipe) => (
        <li key={recipe.id} className="min-w-[140px] max-w-[140px]">
          <RecipeListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  )
}

//TODO: データ取得
