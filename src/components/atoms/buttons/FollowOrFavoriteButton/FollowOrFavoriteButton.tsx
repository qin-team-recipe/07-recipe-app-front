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
      className={`h-[25px] rounded px-3 text-sm
        ${isActive && "bg-Tomato-09 text-Mauve-01"}
        ${!isActive && "border-[1px] border-solid border-Tomato-07 text-Tomato-11"}
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
