"use client"

import { useState } from "react"

interface FollowButtonProps {
  innerText: string
  onClick: () => void
  isFav: boolean
}

export const FollowButton = ({ innerText, onClick, isFav }: FollowButtonProps) => {
  const [isActive, setIsActive] = useState(isFav)

  const handleClick = () => {
    // ボタンの状態のトグル
    setIsActive((isActive) => !isActive)

    //
    onClick()
  }

  return (
    <button
      className={`h-[25px] w-[108px] rounded text-fs14
        ${isActive && "bg-Tomato-09 text-Mauve-01"}
        ${!isActive && "text-Tomato-11 border-Tomato-07 border-solid border-[1px]"}
      `}
      onClick={handleClick}
    >
      {innerText}
    </button>
  )
}
