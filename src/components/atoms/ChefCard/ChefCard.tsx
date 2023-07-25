import Image from "next/image"
import Link from "next/link"

type ChefCardProps = {
  image: string
  name: string
  profile: string
  url: string
  numberOfRecipes: number
}

export const ChefCard = (props: ChefCardProps) => {
  return (
    <Link href={props.url} className="flex gap-4">
      <Image src={props.image} width={88} height={116} alt="シェフ画像" className="rounded-2xl" />
      <div className="h-14 w-64 text-sm">
        <h1 className="text-lg font-bold">{props.name}</h1>
        <p className="my-1 line-clamp-3 h-14 text-Mauve-10">{props.profile}</p>
        <div className="flex">
          <Image src="/assets/icons/kitchen.svg" width={16} height={16} alt="kitchenIcon" />
          <p className="ml-2">{props.numberOfRecipes}レシピ</p>
        </div>
      </div>
    </Link>
  )
}
