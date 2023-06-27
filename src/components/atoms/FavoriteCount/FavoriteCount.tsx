import Image from "next/image"

interface FavoriteCountProps {
  count: number
}

export const FavoriteCount = (props: FavoriteCountProps) => {
  return (
    <div className="absolute top-2 right-2 flex p-[6px] bg-Mauve-alpha-10 rounded-2xl bg-opacity-50">
      <Image src="heart.svg" alt="お気に入り数" width={14} height={14} />
      <p className="text-Mauve-01 text-fs14 leading-none ml-1 font-inter">{props.count.toLocaleString()}</p>
    </div>
  )
}
