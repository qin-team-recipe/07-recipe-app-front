import Image from "next/image"

interface SocialLoginButtonProps {
  platform: "google" | "apple"
  onClick?: () => void
}

export const SocialLoginButton = ({ platform = "google", onClick }: SocialLoginButtonProps) => {
  return (
    <button
      type="button"
      className={`flex cursor-pointer items-center rounded px-3 py-2 text-fs14 font-bold text-White
      ${platform === "google" && "bg-Blue-light-10"}
      ${platform === "apple" && "bg-Mauve-12"}
      `}
      onClick={onClick}
    >
      <Image className="mr-1" src={`assets/icons/${platform}.svg`} width={16} height={16} alt={`${platform}Icon`} />
      {platform.charAt(0).toUpperCase() + platform.slice(1)}ログイン
    </button>
  )
}
