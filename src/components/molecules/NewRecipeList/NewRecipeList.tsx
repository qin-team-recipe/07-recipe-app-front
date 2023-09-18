import { RecipeListItem } from "../RecipeListItem/RecipeListItem"

type NewRecipeListProps = {
  horizontalScroll?: boolean
}
export const NewRecipeList = (props: NewRecipeListProps) => {
  const NewRecipeItems = [
    {
      id: "1",
      imagePath: "/assets/images/food/new/1.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
    {
      id: "2",
      imagePath: "/assets/images/food/new/2.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
    {
      id: "3",
      imagePath: "/assets/images/food/new/3.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
    {
      id: "4",
      imagePath: "/assets/images/food/new/4.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
    {
      id: "5",
      imagePath: "/assets/images/food/new/5.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
    {
      id: "6",
      imagePath: "/assets/images/food/new/6.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
    {
      id: "7",
      imagePath: "/assets/images/food/new/7.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
    {
      id: "8",
      imagePath: "/assets/images/food/new/8.png",
      linkUrl: "",
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタ",
      content: "ウルトラハイパー超すごいしまぶーシェフ",
      count: 1234,
    },
  ]

  return (
    <ul className={props.horizontalScroll ? "flex flex-nowrap gap-3 overflow-x-auto" : "flex flex-wrap gap-2"}>
      {NewRecipeItems.map((recipe) => (
        <li key={recipe.id} className="w-[173px]">
          <RecipeListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  )
}

//TODO: データ取得
