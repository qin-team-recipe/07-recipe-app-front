"use client"
import { InputText } from "@/components/atoms/InputText/InputText"
import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { SaveButton } from "@/components/atoms/buttons/SaveButton/SaveButton"

export default function SingUpPage() {
  return (
    <>
      <section className="my-5 text-center">
        <SectionTitle fontSize={"xl"} heading={"h1"} text="新規登録" />
      </section>

      <section className="pb-5">
        <SectionTitle fontSize={"lg"} heading={"h2"} text="ニックネーム" />
        <InputText placeholder={"ニックネームを入力ください"} />
      </section>

      <section className="mt-4 flex gap-4">
        <SaveButton
          innerText={"登録する"}
          onClick={function (): void {
            throw new Error("Function not implemented.")
          }}
          type={"primary"}
        />
        <SaveButton
          innerText={"ログアウト"}
          onClick={function (): void {
            throw new Error("Function not implemented.")
          }}
          type={"secondary"}
        />
      </section>
    </>
  )
}
