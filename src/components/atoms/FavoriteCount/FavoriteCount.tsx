import Image from "next/image"

interface FavoriteCountProps {
  count: number
}

export const FavoriteCount = (props: FavoriteCountProps) => {
  return (
    <div className="absolute right-2 top-2 flex rounded-2xl bg-Mauve-alpha-10 bg-opacity-50 p-[6px]">
      <Image src="assets/icons/heart.svg" alt="お気に入り数" width={14} height={14} />
      <p className="ml-1 font-inter text-sm leading-none text-Mauve-01">{props.count.toLocaleString()}</p>
    </div>
  )
}
