/**
 * 料理の材料リスト ＠レシピ詳細ページ
 */

import Image from "next/image"

import { IngredientListItem } from "@/components/atoms/IngredientListItem/IngredientListItem"
import { CopyButton } from "@/components/atoms/buttons/CopyButton/CopyButton"

type Props = {
  servingOfNumber: number // ⚪︎人前
}

export const IngredientList = ({ servingOfNumber }: Props) => {
  // TODO: このコンポーネントでfetchするか後で考える
  const 仮の材料リスト = [
    {
      name: "じゃがいも",
      description: "4個",
      isAdded: true,
    },
    {
      name: "玉ねぎ",
      description: "1個",
      isAdded: false,
    },
    {
      name: "にんじん",
      description: "1個",
      isAdded: true,
    },
    {
      name: "豚肉",
      description: "200g",
      isAdded: false,
    },
  ]

  const handleClickAddAll = () => {
    // TODO: [まとめてお買い物に追加]ボタン押下時の処理を書く
  }

  const handleClickCopy = () => {
    // TODO: [コピーする]ボタン押下時の処理を書く
  }

  return (
    <div className="max-w-[480px]">
      <div className="flex h-[52px] items-center justify-between px-4 pb-2 pt-5">
        <h3 className="text-fs20 font-bold leading-none text-Mauve-12">{servingOfNumber}人前</h3>
        <button className="flex items-center font-bold" onClick={handleClickAddAll}>
          <Image className="mr-[2px]" src="assets/icons/cart_gray.svg" alt="cartIcon" width={18} height={18} />
          <span className="text-fs16 font-bold leading-none text-Mauve-09">まとめてお買い物に追加</span>
        </button>
      </div>
      <ul className="divide-y divide-Mauve-07 border border-l-0 border-r-0 border-Mauve-07">
        {仮の材料リスト.map(({ name, description, isAdded }, index) => (
          <IngredientListItem name={name} description={description} isAdded={isAdded} key={index} />
        ))}
      </ul>
      <CopyButton onClick={handleClickCopy} />
    </div>
  )
}
