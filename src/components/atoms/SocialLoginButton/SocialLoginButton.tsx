import Image from "next/image"

interface SocialLoginButtonProps {
  platform: "Google" | "Apple"
  onClick?: () => void
}

export const SocialLoginButton = ({ platform = "Google", onClick }: SocialLoginButtonProps) => {
  const renderIcon = () => {
    let iconPath = ""
    if (platform === "Google") iconPath = "/assets/google_icon.svg"
    if (platform === "Apple") iconPath = "/assets/apple_icon.svg"

    return <Image className="mr-1" src={iconPath} width={16} height={16} alt={`${platform}Icon`} />
  }

  const buttonColor = () => {
    if (platform === "Google") return "bg-Blue-light-10"
    if (platform === "Apple") return "bg-Mauve-12"
  }

  return (
    <button
      type="button"
      className={`text-fs14 ${buttonColor()} text-White font-bold rounded cursor-pointer py-2 px-3 flex items-center`}
      onClick={onClick}
    >
      {renderIcon()}
      {platform}でログイン
    </button>
  )
}
