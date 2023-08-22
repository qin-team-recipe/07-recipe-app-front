import Image from "next/image"

import { SocialLoginButton } from "@/components/atoms/buttons/SocialLoginButton/SocialLoginButton"

interface LoginTopProps {
  type: "favorite" | "shopping"
}

export const LoginTop = ({ type }: LoginTopProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={`/assets/images/login_${type}.png`} width={200} height={200} alt="LoginTop" />
      <div className="flex flex-col items-center gap-3">
        <p className="text-base font-bold">ログインをお願いします</p>
        <p className="text-sm">こちらの機能を利用するにはログインが必要です</p>
      </div>
      <div className="flex justify-center gap-3">
        <SocialLoginButton platform="google" />
        <SocialLoginButton platform="apple" />
      </div>
    </div>
  )
}
