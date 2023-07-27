"use client"

import Image from "next/image"

type BackButtonProps = {
  color: "black" | "white"
  className: string
}

export const BackButton = ({ color, className }: BackButtonProps) => {
  const handleClick = () => {
    history.back()
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {color === "black" ? (
        <Image src="assets/icons/arrow_black.svg" width={24} height={24} alt="戻る" />
      ) : (
        <Image src="assets/icons/arrow_white.svg" width={40} height={40} alt="戻る" />
      )}
    </button>
  )
}
