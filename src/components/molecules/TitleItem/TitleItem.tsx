// import { BackButton } from "@/components/atoms/buttons/BackButton/BackButton"

import Image from "next/image"
import Link from "next/link"

export type TitleItemProps = {
  title: string
  url: string
  fontSize?: number
  fontWeight?: string
  //   iconBefore?: string
  //   iconBeforeWidth?: number
  //   iconBeforeHight?: number
  iconAfter: boolean
  iconAfterPath: string
  iconAfterWidth?: number
  iconAfterHight?: number
}

export const TitleItem = (props: TitleItemProps) => {
  return (
    <div className="hover: my-3">
      <Link href={props.url} className="">
        <div className={`font-${props.fontWeight} text-${props.fontSize}  flex leading-10`}>
          <h1 className="flex-1">{props.title} </h1>
          {props.iconAfter === true ? (
            <Image
              src={props.iconAfterPath}
              width={props.iconAfterWidth}
              height={props.iconAfterHight}
              alt={props.title}
              className="mr-2 flex"
            />
          ) : null}
        </div>
      </Link>
    </div>
  )
}
