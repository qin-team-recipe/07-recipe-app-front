import Image from "next/image"
import Link from "next/link"

interface FeatureChefProps {
  icon: string
  name: string
  url: string
}

export const FeatureChef = (props: FeatureChefProps) => {
  return (
    <Link href={props.url} className="relative">
      <Image src={props.icon} width={148} height={220} alt="ChefIcon" className="rounded-2xl" />
      <p className="absolute bottom-[11px] left-3 text-[20px] font-bold text-Mauve-01">{props.name}</p>
    </Link>
  )
}
