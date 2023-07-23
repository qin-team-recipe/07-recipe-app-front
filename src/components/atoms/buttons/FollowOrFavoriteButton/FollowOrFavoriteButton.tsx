"use client"

import { useState } from "react"

export const BUTTON_TYPE = {
  FOLLOW: "follow",
  FAVORITE: "favorite",
} as const

interface FollowOrFavoriteButtonProps {
  buttonType: (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE]
  toggleFollowOrFavorite: () => void
  isFollowOrFavorite: boolean
  className?: string // margin取るのに必要になりそう
}

export const FollowOrFavoriteButton = ({
  buttonType,
  toggleFollowOrFavorite,
  isFollowOrFavorite,
  className,
}: FollowOrFavoriteButtonProps) => {
  const [isActive, setIsActive] = useState(isFollowOrFavorite) // ボタンの見た目

  const handleClick = () => {
    // 「ボタンの見た目の状態」のトグル
    setIsActive((isActive) => !isActive)

    // 「フォロー状態」or「お気に入り状態」のトグル
    toggleFollowOrFavorite()
  }

  return (
    <button
      className={`h-[25px] rounded px-3 text-sm w-full
        ${isActive ? "border-[1px] border-solid border-Tomato-07 text-Tomato-11" : "bg-Tomato-09 text-Mauve-01"} 
        ${className ? className : ""}
      `}
      onClick={handleClick}
    >
      {buttonType === BUTTON_TYPE.FOLLOW && !isActive && "フォローする"}
      {buttonType === BUTTON_TYPE.FOLLOW && isActive && "フォロー中"}
      {buttonType === BUTTON_TYPE.FAVORITE && !isActive && "お気に入りに追加"}
      {buttonType === BUTTON_TYPE.FAVORITE && isActive && "お気に入りから削除"}
    </button>
  )
}
