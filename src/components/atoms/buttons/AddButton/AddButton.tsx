import Image from "next/image"

interface AddButtonProps {
  innerText: string
  onClick?: () => void
}

export const AddButton = ({ innerText, onClick }: AddButtonProps) => {
  return (
    <button type="button" className="text-fs16 text-Tomato-12 leading-[19px] flex items-center" onClick={onClick}>
      <Image className="mr-1" src="/assets/add_icon.svg" width={16} height={16} alt="addIcon" />
      {innerText}
      を追加する
    </button>
  )
}
