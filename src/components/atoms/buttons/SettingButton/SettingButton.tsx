import Image from "next/image"
import Link from "next/link"

export const SettingButton = () => {
  return (
    <Link href="/">
      <Image src="assets/icons/setting.svg" width={24} height={24} alt="設定へ" className="absolute left-4 top-3" />
    </Link>
  )
}
