"use client"

import Image from "next/image"
import { useState } from "react"

import { ThemeIcon } from "@mantine/core"

interface LikeButtonProps {
  isLikedProp: boolean
}

export const LikeButton = ({ isLikedProp }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(isLikedProp)

  const turnOnLike = () => {
    setIsLiked(!isLiked)
  }
  const turnOffLike = () => {
    setIsLiked(!isLiked)
  }
  return isLiked ? (
    <>
      <ThemeIcon radius="xl" size="xl" className="bg-Tomato-12 w-[60px] h-[60px] cursor-pointer" onClick={turnOffLike}>
        <Image src="heart.svg" alt="ライク" width={36} height={36}></Image>
      </ThemeIcon>
    </>
  ) : (
    <>
      <ThemeIcon radius="xl" size="xl" className="bg-Mauve-10 w-[60px] h-[60px] cursor-pointer" onClick={turnOnLike}>
        <Image src="heart.svg" alt="ライク" width={36} height={36}></Image>
      </ThemeIcon>
    </>
  )
}
// TODO: ボタン押下時の処理
// TODO:トランジション処理?
