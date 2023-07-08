import Image from "next/image"

interface DetailTopProps {
  name: string // シェフ名 or 料理名
  content: string // 説明文
  url: string // 画像URL
  category: "chef" | "recipe"
}

/**
 * 詳細画面(シェフor料理)の上部に表示するコンポーネント
 */
export const DetailTop = ({ name, content, url, category }: DetailTopProps) => {
  return (
    <div className="flex flex-col max-w-[390px]">
      <div
        className="mb-4"
        style={{
          position: "relative",
          width: "390px",
          height: "390px",
        }}
      >
        <Image src={url} fill style={{ objectFit: "cover" }} alt="TopImage" />
      </div>
      <p className="text-Mauve-12 text-fs22 px-4 mb-3 font-bold">{name}</p>
      <p className="text-Mauve-12 text-fs16 px-4 mb-4 font-normal">{content}</p>
    </div>
  )
}
