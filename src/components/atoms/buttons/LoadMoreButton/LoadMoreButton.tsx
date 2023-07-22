import Link from "next/link"

type LoadMoreButtonProps = {
  url: string
}
export const LoadMoreButton = ({ url }: LoadMoreButtonProps) => {
  return (
    <>
      <button className="w-[80px] cursor-pointer text-Mauve-07">
        <Link href={url}>もっと見る</Link>
      </button>
    </>
  )
}
