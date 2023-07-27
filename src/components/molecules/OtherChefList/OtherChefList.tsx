import { ChefCard } from "@/components/atoms/ChefCard/ChefCard"

type ChefCardProps = {
  id: string
  image: string
  name: string
  profile: string
  url: string
  count: number
}
export const OtherChefList = () => {
  const dummyData: ChefCardProps[] = [
    {
      id: "aaa",
      image: "/assets/images/other_chef.png",
      name: "山田シェフ",
      profile:
        "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      url: "/",
      count: 123,
    },
    {
      id: "bbb",
      image: "/assets/images/other_chef.png",
      name: "山田シェフ",
      profile:
        "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      url: "/",
      count: 123,
    },
    {
      id: "ccc",
      image: "/assets/images/other_chef.png",
      name: "山田シェフ",
      profile:
        "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      url: "/",
      count: 123,
    },
  ]
  return (
    <ul className={"flex max-w-[480px] flex-col justify-between  gap-4"}>
      {dummyData.map((chef) => (
        <li key={chef.id}>
          <ChefCard {...chef} />
        </li>
      ))}
    </ul>
  )
}
