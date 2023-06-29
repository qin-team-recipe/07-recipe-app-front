/**
 * 共通ヘッダー ( 戻るボタン + ページタイトル )
 */

import { BackButton } from "@/components/atoms/BackButton/BackButton"

type HeaderWithBackButtonProps = {
  title: string
  isUseBackButton: boolean
}

const HeaderWithBackButton = ({ title, isUseBackButton }: HeaderWithBackButtonProps) => {
  return (
    <header className="relative h-12 max-w-[480px] flex justify-center items-center border-0 border-b-[1px] border-Mauve-06 border-solid ">
      {isUseBackButton && <BackButton color="black" className="absolute left-4 top-3" />}
      <h1 className="text-Mauve-12 font-bold text-fs20 leading-6">{title}</h1>
    </header>
  )
}

export default HeaderWithBackButton
