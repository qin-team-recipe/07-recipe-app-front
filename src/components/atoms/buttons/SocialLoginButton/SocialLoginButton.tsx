import Image from "next/image"

interface SocialLoginButtonProps {
  platform: "google" | "apple"
  onClick?: () => void
}

export const SocialLoginButton = ({ platform = "google", onClick }: SocialLoginButtonProps) => {
  return (
    <button
      type="button"
      className={`text-fs14 text-White font-bold rounded cursor-pointer py-2 px-3 flex items-center
      ${platform === "google" && "bg-Blue-light-10"}
      ${platform === "apple" && "bg-Mauve-12"}
      `}
      onClick={onClick}
    >
      <Image className="mr-1" src={`/assets/${platform}_icon.svg`} width={16} height={16} alt={`${platform}Icon`} />
      {platform.charAt(0).toUpperCase() + platform.slice(1)}でログイン
    </button>
  )
}
