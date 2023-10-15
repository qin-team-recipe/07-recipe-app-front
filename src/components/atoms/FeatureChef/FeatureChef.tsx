import Image from "next/image"
import Link from "next/link"

type FeatureChefProps = {
  icon: string
  name: string
  url: string
}

export const FeatureChef = (props: FeatureChefProps) => {
  return (
    <Link href={props.url} className="relative">
      <Image src={props.icon} width={140} height={150} alt="ChefIcon" className="rounded-2xl" />
      <p className="absolute bottom-[11px]  pl-2 pr-1  text-base font-bold text-Mauve-01">{props.name}</p>
    </Link>
  )
}
