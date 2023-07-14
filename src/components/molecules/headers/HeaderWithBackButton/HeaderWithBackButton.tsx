/**
 * 共通ヘッダー ( 戻るボタン + ページタイトル )
 */

import { BackButton } from "@/components/atoms/buttons/BackButton/BackButton"

type HeaderWithBackButtonProps = {
  title: string
  isUseBackButton: boolean
}

const HeaderWithBackButton = ({ title, isUseBackButton }: HeaderWithBackButtonProps) => {
  return (
    <header className="relative flex h-12 max-w-[480px] items-center justify-center border-0 border-b-[1px] border-solid border-Mauve-06 ">
      {isUseBackButton && <BackButton color="black" className="absolute left-4 top-3" />}
      <h1 className="text-fs20 font-bold leading-6 text-Mauve-12">{title}</h1>
    </header>
  )
}

export default HeaderWithBackButton
