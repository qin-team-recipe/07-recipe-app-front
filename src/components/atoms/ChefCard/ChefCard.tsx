import Image from "next/image"
import Link from "next/link"

type ChefCardProps = {
  chef: {
    id: string
    icon: string
    name: string
    text: string
    url: string
    count: number
  }
}

export const ChefCard = ({ chef }: ChefCardProps) => {
  return (
    <>
      <Link key={chef.name} href={chef.url} className="flex gap-4">
        <Image src={chef.icon} width={88} height={116} alt="kitchenIcon" className="rounded-2xl" />
        <div className="h-14 w-64 text-sm">
          <h1 className="text-lg font-bold">{chef.name}</h1>
          <p className="my-1 line-clamp-3  text-Mauve-10">{chef.text}</p>
          <div className="flex">
            <Image src="/assets/icons/kitchen.svg" width={16} height={16} alt="kitchenIcon" className="rounded-2xl" />
            <p className="ml-2 flex">{chef.count}レシピ</p>
          </div>
        </div>
      </Link>
    </>
  )
}
