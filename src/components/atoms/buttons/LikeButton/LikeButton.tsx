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
      <ThemeIcon radius="xl" size="xl" className="h-[60px] w-[60px] cursor-pointer bg-Tomato-12" onClick={turnOffLike}>
        <Image src="assets/icons/heart.svg" alt="ライク" width={36} height={36}></Image>
      </ThemeIcon>
    </>
  ) : (
    <>
      <ThemeIcon radius="xl" size="xl" className="h-[60px] w-[60px] cursor-pointer bg-Mauve-10" onClick={turnOnLike}>
        <Image src="assets/icons/heart.svg" alt="ライク" width={36} height={36}></Image>
      </ThemeIcon>
    </>
  )
}
// TODO: ボタン押下時の処理
// TODO:トランジション処理?
