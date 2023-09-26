"use client"
import { SetStateAction } from "react"

import { ImageSelector } from "@/components/atoms/ImageSelector/ImageSelector"
import { InputText } from "@/components/atoms/InputText/InputText"
import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { AddButton } from "@/components/atoms/buttons/AddButton/AddButton"
import { SaveButton } from "@/components/atoms/buttons/SaveButton/SaveButton"
import HeaderWithBackButton from "@/components/molecules/headers/HeaderWithBackButton/HeaderWithBackButton"

export default function ProfilePage() {
  return (
    <>
      <HeaderWithBackButton title={"編集"} isUseBackButton={false} />
      <section className="mb-2 mt-5">
        <SectionTitle fontSize={"base"} heading={"h1"} text="ニックネーム" />
      </section>
      <InputText placeholder={"しまぶー"} />
      <section className="mb-2 mt-7">
        <SectionTitle fontSize={"base"} heading={"h1"} text="プロフィール画（任意）" />
      </section>
      <ImageSelector
        setFileCallback={function (value: SetStateAction<File | null>): void {
          throw new Error("Function not implemented.")
        }}
      />
      <section className="mb-2 mt-8">
        <SectionTitle fontSize={"base"} heading={"h1"} text="自己紹介（任意）" />
      </section>
      <textarea className="h-20 w-full resize-none border border-Mauve-06 bg-White px-4 py-3" />

      <section className="mb-2 mt-8">
        <SectionTitle fontSize={"base"} heading={"h1"} text="リンク（任意）" />
      </section>
      <InputText placeholder={""} />
      <InputText placeholder={""} />
      <section className="mb-8 mt-4">
        <AddButton innerText={"リンクを"} />
      </section>
      <section className="flex items-center">
        <section className="flex-1">
          <SaveButton
            innerText={"保存する"}
            onClick={function (): void {
              throw new Error("Function not implemented.")
            }}
            type={"primary"}
          />
        </section>
        <section>
          <SaveButton
            innerText={"キャンセル"}
            onClick={function (): void {
              throw new Error("Function not implemented.")
            }}
            type={"secondary"}
          />
        </section>
      </section>
    </>
  )
}
