import Image from "next/image"

interface AddButtonProps {
  innerText: string
  onClick?: () => void
}

export const AddButton = ({ innerText, onClick }: AddButtonProps) => {
  return (
    <button type="button" className="flex items-center text-base text-Tomato-12" onClick={onClick}>
      <Image className="mr-1" src="assets/icons/add.svg" width={16} height={16} alt="addIcon" />
      {innerText}
      を追加する
    </button>
  )
}
