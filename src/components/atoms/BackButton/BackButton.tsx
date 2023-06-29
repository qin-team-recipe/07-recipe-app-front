import Image from "next/image"

type BackButtonProps = {
  color: "black" | "white"
}

export const BackButton = ({ color }: BackButtonProps) => {
  const handleClick = () => {
    history.back()
  }

  return (
    <button type="button" onClick={handleClick}>
      {color === "black" ? (
        <Image src="/arrow_black.svg" width={24} height={24} alt="戻る" />
      ) : (
        <Image src="/arrow_white.svg" width={40} height={40} alt="戻る" />
      )}
    </button>
  )
}