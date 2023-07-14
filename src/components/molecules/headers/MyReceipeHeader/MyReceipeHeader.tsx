import Image from "next/image"

import { TextButton } from "@/components/atoms/buttons/TextButton/TextButton"

interface MyReceipeHeaderProps {
  close: () => void
  draft: () => void
  create: () => void
  isExistDraft: boolean // 下書きのレシピがあるかどうか
  isEditing: boolean // 編集中かどうか （レシピ名・材料・作り方の入力がされているかどうか）
}

/**
 * マイレシピ作成時ヘッダー
 */
export const MyReceipeHeader = ({ close, draft, create, isExistDraft, isEditing }: MyReceipeHeaderProps) => {
  return (
    <div className="flex max-w-[480px] items-center justify-between bg-Mauve-01 px-[16px] py-[12px]">
      <Image
        src="assets/icons/close.svg"
        className="cursor-pointer"
        width={24}
        height={24}
        alt="close"
        onClick={close}
      />
      <div className="flex items-center">
        {isExistDraft && !isEditing && <TextButton innerText="下書き" primary={false} onClick={draft} />}
        <TextButton innerText="作成する" primary={true} onClick={create} disabled={!isEditing} />
      </div>
    </div>
  )
}
