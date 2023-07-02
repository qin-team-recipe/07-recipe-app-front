import Image from "next/image"

interface ChefDetailTextProps {
  name: string // シェフ名
  content: string // シェフの紹介文
}

/**
 * シェフ詳細
 */
export const ChefDetailText = ({ name, content }: ChefDetailTextProps) => {
  return (
    <div className="flex flex-col gap-4 px-4 max-w-[448px]">
      <p className="text-Mauve-12 text-fs28 font-bold">{name}</p>
      <p className="text-Mauve-12 text-fs16 font-normal">{content}</p>
    </div>
  )
}
