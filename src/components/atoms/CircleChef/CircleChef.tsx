import Image from "next/image"
import Link from "next/link"

interface CircleChefProps {
  icon: string
  name: string
  url: string
}

export const CircleChef = (props: CircleChefProps) => {
  return (
    <Link href={props.url} className="flex flex-col items-center">
      <div className="bg-gray-100 h-[68px] w-[68px] rounded-full ">
        <Image src={props.icon} alt="Chef" width={68} height={68} className="rounded-full" />
      </div>
      <p className="mt-1 text-[12px]">{props.name}</p>
    </Link>
  )
}
