import { LoginTop } from "@/components/molecules/LoginTop/LoginTop"
import { Navigation } from "@/components/molecules/Navigation/Navigation"
import HeaderWithSettingButton from "@/components/molecules/headers/HeaderWithSettingButton/HeaderWithSettingButton"

export default function FavoritePage() {
  return (
    <>
      <HeaderWithSettingButton title={"お気に入り"} isUseSettingButton={true} />
      <LoginTop type={"favorite"} />
      <Navigation />
    </>
  )
}
