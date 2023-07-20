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
      <div className="mb-4 relative aspect-square">
        <Image src={url} fill className="object-cover" alt="TopImage" />
      </div>
      <p className="text-Mauve-12 text-xl px-4 mb-3 font-bold">{name}</p>
      <p className="text-Mauve-12 text-base px-4 mb-4 font-normal">{content}</p>
    </div>
  )
}
