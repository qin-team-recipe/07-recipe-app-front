import Image from "next/image"

type Props = {
  onClick?: () => void
}

export const CopyButton = ({ onClick }: Props) => {
  return (
    <button className="ml-auto mr-0 flex items-center px-4 py-2" onClick={onClick}>
      <Image className="mr-[2px]" src="assets/icons/copy_blue.svg" alt="copyIcon" width={18} height={18} />
      <span className="text-xs text-Blue-alpha-11">コピーする</span>
    </button>
  )
}
