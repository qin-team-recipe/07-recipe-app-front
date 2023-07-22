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

      <div className="bg-white inline-flex h-[100px] w-[100px] flex-col items-center justify-center gap-[5px] rounded-lg border border-Mauve-06">
        <div className="text-xs text-Mauve-11">画像を設定</div>
        <Image width={20} height={20} alt="plus_icon" src="/assets/icons/plus.svg" />
      </div>
    </label>
  )
}
