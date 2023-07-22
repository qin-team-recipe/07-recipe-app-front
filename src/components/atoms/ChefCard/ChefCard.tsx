import Image from "next/image"
import Link from "next/link"

type ChefCardProps = {
  icon: string
  name: string
  text: string
  args: string
  count: number
}

export const ChefCard = (props: ChefCardProps) => {
  return (
    <Link href={props.args} className="flex gap-4">
      <Image src={props.icon} width={88} height={116} alt="kitchenIcon" className="rounded-2xl" />
      <div className="h-14 w-64 text-sm">
        <h1 className="text-lg font-bold">{props.name}</h1>
        <p className="my-1 line-clamp-3 h-14 text-Mauve-10">{props.text}</p>
        <div className="flex">
          <Image src="/assets/icons/kitchen.svg" width={16} height={16} alt="kitchenIcon" />
          <p className="ml-2">{props.count}レシピ</p>
        </div>
      </div>
    </Link>
  )
}
