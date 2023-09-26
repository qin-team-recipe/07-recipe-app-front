"use client"
import { useState } from "react"

export type InputTextProps = {
  placeholder: string
}

export const InputText = ({ placeholder }: InputTextProps) => {
  const [text, setText] = useState("")
  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setText(e.target.value)
  }
  // 下記クリア処理は今のところ不要かも？
  // const clearInputText = () => {
  //   setText("")

  return (
    <>
      <div className="">
        <input
          type="text"
          className="w-full border-y-[1px]  border-solid border-Mauve-07 px-4 py-2  placeholder-Mauve-07 outline-none"
          placeholder={placeholder}
          value={text}
          onChange={handleInputTextChange}
        />
      </div>
    </>
  )
}
