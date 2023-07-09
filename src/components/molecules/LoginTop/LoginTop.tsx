import { SocialLoginButton } from "@/components/atoms/buttons/SocialLoginButton/SocialLoginButton"
import Image from "next/image"

interface LoginTopProps {
  type: "favorite" | "shopping"
}

export const LoginTop = ({ type }: LoginTopProps) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      {type === "favorite" && <Image src="assets/images/login_favorite.png" width={200} height={200} alt="LoginTop" />}
      {type === "shopping" && <Image src="assets/images/login_shopping.png" width={200} height={200} alt="LoginTop" />}
      <div className="flex flex-col items-center gap-3">
        <p className="text-fs16 font-bold">ログインをお願いします</p>
        <p className="text-fs14">こちらの機能を利用するにはログインが必要です</p>
      </div>
      <div className="flex justify-center gap-3">
        <SocialLoginButton platform="google" />
        <SocialLoginButton platform="apple" />
      </div>
    </div>
  )
}
