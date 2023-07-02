/**
 * 料理の材料コンポーネント ＠レシピ詳細ページ
 */
"use client"

import Image from "next/image"

interface IngredientListItemProps {
  name: string
  description: string
  isAdded: boolean // お買い物リストに追加済かどうか？
}

export const IngredientListItem = ({ name, description, isAdded }: IngredientListItemProps) => {
  const handleClick = () => {
    if (isAdded) {
      // TODO: お買い物リストから削除する処理をかく
    } else {
      // TODO: お買い物リストへ追加する処理をかく
    }
  }

  return (
    <li className="py-2 px-4 max-w-[480px] flex justify-between items-center">
      <div>
        <h3 className="text-Mauve-12 text-fs14 leading-[17px]">{name}</h3>
        <p className="text-Mauve-10 text-fs10 leading-[12px] mt-1">{description}</p>
      </div>

      <button type="button" onClick={handleClick}>
        {isAdded ? (
          <Image src="cart_icon_red.svg" alt="削除" width={20} height={20} />
        ) : (
          <Image src="cart_icon_gray.svg" alt="追加" width={20} height={20} />
        )}
      </button>
    </li>
  )
}
