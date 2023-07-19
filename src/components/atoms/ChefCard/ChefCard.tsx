import Image from "next/image"
import Link from "next/link"

const ChefCardItems = [
  {
    icon: "detail_hifumiChef.svg",
    name: "山田シェフ",
    text: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    url: "/",
    count: 123,
  },
]

export const ChefCard = () => {
  return (
    <div>
      {ChefCardItems.map((item) => (
        <Link key={item.name} href={item.url} className="flex gap-4">
          <Image src={item.icon} width={88} height={116} alt="kitchenIcon" className="rounded-2xl" />
          <div className="h-14 w-64 text-sm">
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="my-1 line-clamp-3  text-Mauve-10">{item.text}</p>
            <div className="flex">
              <Image src="/assets/icons/kitchen.svg" width={16} height={16} alt="kitchenIcon" className="rounded-2xl" />
              <p className="ml-2 flex">{item.count}レシピ</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
