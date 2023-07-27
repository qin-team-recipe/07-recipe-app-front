import Image from "next/image"

interface DetailTopProps {
  name: string // シェフ名 or 料理名
  content: string // 説明文
  url: string // 画像URL
}

/**
 * 詳細画面(シェフor料理)の上部に表示するコンポーネント
 */
export const DetailTop = ({ name, content, url }: DetailTopProps) => {
  return (
    <div className="max-w-[480px]">
      <div className="relative mb-4 aspect-square">
        <Image src={url} fill className="object-cover" alt="TopImage" />
      </div>
      <p className="mb-3 px-4 text-xl font-bold text-Mauve-12">{name}</p>
      <p className="mb-4 px-4 text-base font-normal text-Mauve-12">{content}</p>
    </div>
  )
}
