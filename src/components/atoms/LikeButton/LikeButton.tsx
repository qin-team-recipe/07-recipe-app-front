import Image from "next/image"
import { useState } from "react"

import { ThemeIcon } from "@mantine/core"

interface LikeButtonProps {
  isLiked: boolean
}

export const LikeButton = ({ isLiked }: LikeButtonProps) => {
  const [state, setState] = useState(isLiked)

  const turnOnLike = () => {
    setState(!state)
  }
  const turnOffLike = () => {
    setState(!state)
  }
  return state ? (
    <>
      <ThemeIcon radius="xl" size="xl" className="bg-Tomato-12 w-[60px] h-[60px]" onClick={turnOffLike}>
        <Image src="heart.svg" alt="ライク" width={36} height={36}></Image>
      </ThemeIcon>
    </>
  ) : (
    <>
      <ThemeIcon radius="xl" size="xl" className="bg-Mauve-10 w-[60px] h-[60px]" onClick={turnOnLike}>
        <Image src="heart.svg" alt="ライク" width={36} height={36}></Image>
      </ThemeIcon>
    </>
  )
}
// TODO: ボタン押下時の処理
// TODO:トランジション処理?
