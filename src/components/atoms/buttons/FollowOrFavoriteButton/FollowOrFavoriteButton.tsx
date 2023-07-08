"use client"

import { useState } from "react"

interface FollowOrFavoriteButtonProps {
  type: "follow" | "favorite"
  toggleFollowOrFavorite: () => void
  isFollowOrFavorite: boolean
}

export const FollowOrFavoriteButton = ({
  type,
  toggleFollowOrFavorite,
  isFollowOrFavorite,
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
      className={`h-[25px] px-3 rounded text-fs14
        ${isActive && "bg-Tomato-09 text-Mauve-01"}
        ${!isActive && "text-Tomato-11 border-Tomato-07 border-solid border-[1px]"}
      `}
      onClick={handleClick}
    >
      {type === "follow" && !isActive && "フォローする"}
      {type === "follow" && isActive && "フォロー中"}
      {type === "favorite" && !isActive && "お気に入りに追加"}
      {type === "favorite" && isActive && "お気に入りから削除"}
    </button>
  )
}
