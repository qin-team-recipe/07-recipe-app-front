"use client"

import Image from "next/image"
import { useState } from "react"

import { ImageSelector } from "@/components/atoms/ImageSelector/ImageSelector"
import { RecipeStepItem } from "@/components/atoms/RecipeStepItem/RecipeStepItem"
import { AddButton } from "@/components/atoms/buttons/AddButton/AddButton"
import { SaveButton } from "@/components/atoms/buttons/SaveButton/SaveButton"

const links = [
  {
    linkDestination: "https://www.google.com/",
  },
]

export default function SummarySheetPage() {
  const [show, setShow] = useState(false)

  const handleOpen = () => {
    console.log("handleClick")
    // document.body.style.overflow = "hidden"
    setShow((prevShow) => !prevShow)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className="relative">
      <section className="mb-8">
        <p className="mb-1 text-base font-bold">レシピ名</p>
        <input
          type="text"
          className="w-full border-y-[1px] border-solid border-Mauve-07 px-4 py-2"
          placeholder="例：肉じゃが"
        />
      </section>

      <section className="mb-8 flex flex-col gap-1">
        <div>
          <p className="mb-1 text-base font-bold">材料/2人前</p>
          <input
            type="text"
            className="box-border w-full border-t-[1px] border-solid border-Mauve-07 px-4 py-2"
            placeholder="チーズ"
          />
          <input
            type="text"
            className="box-border w-full border-y-[1px] border-solid border-Mauve-07 px-4 py-2"
            placeholder="キャベツ2個"
          />
        </div>
        <AddButton innerText="材料" onClick={() => {}} />
      </section>

      <section className="mb-8 flex flex-col gap-1">
        <div>
          <p className="mb-1 border-b-[1px] border-solid border-Mauve-07 pb-1 text-base font-bold">作り方</p>
          <RecipeStepItem
            handleOpenModal={handleOpen}
            index={1}
            text="用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。"
          />
          <RecipeStepItem
            handleOpenModal={handleOpen}
            index={2}
            text="用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。"
          />
        </div>

        <AddButton innerText="行程" onClick={() => {}} />
      </section>
      <div className="mb-4">
        <p className="mb-1 text-base font-bold" onClick={handleOpen}>
          画像（任意）
        </p>

        <ImageSelector />
      </div>

      <section className="mb-8 flex flex-col gap-1">
        <div>
          <p className="mb-1 text-base font-bold">リンク/任意</p>
          <input
            type="text"
            className="box-border w-full border-t-[1px] border-solid border-Mauve-07 px-4 py-2"
            placeholder="https://www.youtube.com/xxx"
          />
          <input
            type="text"
            className="box-border w-full border-y-[1px] border-solid border-Mauve-07 px-4 py-2"
            placeholder="https://www.sirogohan.com/xxx"
          />
        </div>
        <AddButton innerText="リンク" onClick={() => {}} />
      </section>

      <section className="flex justify-center gap-4">
        <SaveButton innerText="保存する" onClick={() => {}} type="primary" />
        <SaveButton innerText="キャンセル" onClick={() => {}} type="secondary" />
      </section>

      <section
        id="recipeModal"
        className={`fixed bottom-0 left-1/2 z-50 translate-x-[-50%] transform ${
          show ? "-translate-y-1/2" : "translate-y-full"
        } h-1/2 max-w-[390px] rounded-xl bg-White shadow-md backdrop-blur-lg transition-all duration-700`}
      >
        <div className="px-4 py-4">
          <div className="flex justify-between pb-6">
            <p className="text-xl">作り方</p>
            <Image
              onClick={handleClose}
              className=""
              src="assets/icons/close_summary.svg"
              alt="cartIcon"
              width={30}
              height={30}
            />
          </div>
          <Image src="/assets/images/detail_top_gratin.jpg" alt="recipeImage" width={200} height={200} />
          <p>
            用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します
          </p>
        </div>
      </section>
    </div>
  )
}
