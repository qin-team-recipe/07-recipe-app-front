import Image from "next/image"

type Props = {
  onClick?: () => void
}

export const CopyButton = ({ onClick }: Props) => {
  return (
    <button className="ml-auto mr-0 py-2 px-4 flex items-center" onClick={onClick}>
      <Image className="mr-[2px]" src="assets/icons/copy.svg" alt="copyIcon" width={18} height={18} />
      <span className="text-Blue-alpha-11 text-fs12 leading-none">コピーする</span>
    </button>
  )
}
