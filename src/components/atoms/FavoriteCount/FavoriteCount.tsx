// import { Inter } from "next/font/google"
import Image from "next/image"

interface FavoriteCountProps {
  likeIcon: string
  count: number
}

export const FavoriteCount = (props: FavoriteCountProps) => {
  return (
    <>
      {/* 親要素にrelativeを設定してくだい */}
      <div className="absolute bg-Mauve-alpha-10 w-[67px] h-[26px] rounded-2xl opacity-50"></div>
      <div className="absolute  h-[14px] flex w-[55px] leading-[14px] p-[6px]">
        <Image src={props.likeIcon} alt="お気に入り数" width={14} height={14} className="h-[14px]" />
        <div className=" text-Mauve-01 text-fs14 font-inter">{props.count.toLocaleString()}</div>
      </div>
    </>
  )
}
