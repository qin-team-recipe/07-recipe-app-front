"use client"

import Image from "next/image"
import { useState } from "react"

export const SearchBar = () => {
  const [text, setText] = useState("")
  const handleTextareaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setText(e.target.value)
  }
  const clearText = () => {
    setText("")
  }

  return (
    <div className="h-14 w-[390px] gap-4 px-4 py-2">
      <div className="flex shrink grow  gap-2 self-stretch rounded-lg bg-Mauve-04 px-3 py-2">
        <Image width={24} height={24} alt="seach_icon" src="assets/icons/search.svg" />
        <input
          type="text"
          placeholder="シェフやレシピを検索"
          className="shrink grow bg-Mauve-04 text-fs16 font-bold leading-normal text-Mauve-12"
          value={text}
          onChange={handleTextareaChange}
        />
        {text && <Image width={24} height={24} alt="close_icon" src="assets/icons/close.svg" onClick={clearText} />}
      </div>
    </div>
  )
}
