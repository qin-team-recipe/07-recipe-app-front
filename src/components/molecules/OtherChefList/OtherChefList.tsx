import { ChefCard } from "@/components/atoms/ChefCard/ChefCard"

type ChefCardProps = {
  id: string
  icon: string
  name: string
  text: string
  url: string
  count: number
}
export const OtherChefList = () => {
  const dummyData: ChefCardProps[] = [
    {
      id: "aaa",
      icon: "detail_hifumiChef.svg",
      name: "山田シェフ",
      text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      url: "/",
      count: 123,
    },
    {
      id: "bbb",
      icon: "detail_hifumiChef.svg",
      name: "山田シェフ",
      text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      url: "/",
      count: 123,
    },
    {
      id: "ccc",
      icon: "detail_hifumiChef.svg",
      name: "山田シェフ",
      text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      url: "/",
      count: 123,
    },
  ]
  return (
    <ul className={"flex flex-col max-w-[480px] gap-4  justify-between"}>
      {dummyData.map((chef) => (
        <li key={chef.id}>
          <ChefCard chef={chef} />
        </li>
      ))}
    </ul>
  )
}
