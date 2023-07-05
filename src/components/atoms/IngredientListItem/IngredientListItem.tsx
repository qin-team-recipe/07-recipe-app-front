/**
 * 料理の材料コンポーネント
 * ＠レシピ詳細画面
 * ＠マイレシピ追加画面
 */
"use client"

import Image from "next/image"

interface IngredientListItemProps {
  name: string
  description?: string
  isUseCartButton?: boolean // お買い物リストに追加ボタンを使用するか？
  isAdded?: boolean // お買い物リストに追加済かどうか？
}

export const IngredientListItem = ({
  name,
  description,
  isUseCartButton = false,
  isAdded = false,
}: IngredientListItemProps) => {
  const handleClick = () => {
    if (isAdded) {
      // TODO: お買い物リストから削除する処理をかく
    } else {
      // TODO: お買い物リストへ追加する処理をかく
    }
  }

  return (
    <li className="py-2 px-4 max-w-[480px] h-[49px] flex justify-between items-center">
      <div>
        <h3 className="text-Mauve-12 text-fs14 leading-[17px]">{name}</h3>
        {description && <p className="text-Mauve-10 text-fs10 leading-[12px] mt-1">{description}</p>}
      </div>
      {isUseCartButton && (
        <button type="button" onClick={handleClick}>
          {isAdded ? (
            <Image src="assets/icons/cart_red.svg" alt="削除" width={20} height={20} />
          ) : (
            <Image src="assets/icons/cart_gray.svg" alt="追加" width={20} height={20} />
          )}
        </button>
      )}
    </li>
  )
}
