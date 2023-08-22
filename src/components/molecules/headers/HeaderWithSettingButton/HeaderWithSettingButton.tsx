import { SettingButton } from "@/components/atoms/buttons/SettingButton/SettingButton"

type HeaderWithSettingButtonProps = {
  title: string
}

const HeaderWithSettingButton = ({ title }: HeaderWithSettingButtonProps) => {
  return (
    <header className="relative flex h-12 max-w-[480px] items-center justify-center border-0 border-b-[1px] border-solid border-Mauve-06 ">
      <SettingButton />
      <h1 className="text-xl font-bold text-Mauve-12">{title}</h1>
    </header>
  )
}

export default HeaderWithSettingButton
