import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { TitleItem } from "@/components/molecules/TitleItem/TitleItem"
import HeaderWithBackButton from "@/components/molecules/headers/HeaderWithBackButton/HeaderWithBackButton"

export default function SettingPage() {
  return (
    <>
      <section>
        <SectionTitle fontSize={"2xl"} heading={"h1"} />
        <HeaderWithBackButton title={"設定"} isUseBackButton={true} />
      </section>

      <section>
        <section className="my-5">
          <SectionTitle fontSize={"base"} heading={"h1"} text="利用規約や問い合わせ" />
        </section>
        <TitleItem
          title="利用規約"
          url="/"
          fontSize={6}
          fontWeight="normal"
          iconAfter={true}
          iconAfterPath="/assets/icons/setting/arrowRight.svg"
          iconAfterWidth={8}
          iconAfterHight={8}
        />
        <TitleItem
          title="プライバシーポリシー"
          url="/"
          fontSize={6}
          fontWeight="normal"
          iconAfter={true}
          iconAfterPath="/assets/icons/setting/arrowRight.svg"
          iconAfterWidth={8}
          iconAfterHight={8}
        />
        <TitleItem
          title="運営会社"
          url="/"
          fontSize={6}
          fontWeight="normal"
          iconAfter={true}
          iconAfterPath="/assets/icons/setting/upperRightArrow.svg"
          iconAfterWidth={10}
          iconAfterHight={10}
        />
        <TitleItem
          title="お問い合わせ"
          url="/"
          fontSize={6}
          fontWeight="normal"
          iconAfter={true}
          iconAfterPath="/assets/icons/setting/upperRightArrow.svg"
          iconAfterWidth={10}
          iconAfterHight={10}
        />
      </section>

      <section className="mt-10">
        <SectionTitle fontSize={"base"} heading={"h1"} text="アカウントの操作" />

        <TitleItem
          title="ログアウト"
          url="/"
          fontSize={6}
          fontWeight="normal"
          iconAfter={true}
          iconAfterPath="/assets/icons/setting/logOut.svg"
          iconAfterWidth={16}
          iconAfterHight={16}
        />
      </section>

      <section className="mt-10">
        <SectionTitle fontSize={"base"} heading={"h1"} text="取り消しができない操作" />
        <TitleItem
          title="退会する"
          url="/"
          fontSize={6}
          fontWeight="normal"
          iconAfter={true}
          iconAfterPath="/assets/icons/setting/delete.svg"
          iconAfterWidth={16}
          iconAfterHight={16}
        />
      </section>
    </>
  )
}
