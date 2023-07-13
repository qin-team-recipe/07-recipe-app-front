import Image from "next/image"
import Link from "next/link"

export interface CircleChefProps {
  icon: string
  name: string
  url: string
}

export const CircleChef = (props: CircleChefProps) => {
  return (
    <Link href={props.url} className="flex flex-col items-center">
      <div className="w-[68px] h-[68px] rounded-full bg-gray-100 ">
        <Image src={props.icon} alt="Chef" width={68} height={68} className="rounded-full" />
      </div>
      <p className="text-[12px] mt-1">{props.name}</p>
    </Link>
  )
}
