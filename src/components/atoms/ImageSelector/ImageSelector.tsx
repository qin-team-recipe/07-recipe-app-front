import Image from "next/image"
import { ChangeEvent } from "react"

export const ImageSelector = ({
  setFileCallback,
}: {
  setFileCallback: React.Dispatch<React.SetStateAction<File | null>>
}) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setFileCallback(file)
    }
  }

  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />

      <div className="w-[100px] h-[100px] bg-white rounded-lg border border-Mauve-06 flex-col justify-center items-center gap-[5px] inline-flex">
        <div className="text-Mauve-11 text-xs">画像を設定</div>
        <Image width={20} height={20} alt="plus_icon" src="/assets/icons/plus.svg" />
      </div>
    </label>
  )
}
