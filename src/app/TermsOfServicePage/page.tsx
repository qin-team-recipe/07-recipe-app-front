import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { TermsOfService } from "@/components/atoms/TermsOfService/TermsOfService"
import HeaderWithBackButton from "@/components/molecules/headers/HeaderWithBackButton/HeaderWithBackButton"

export default function TermsOfServicePage() {
  return (
    <>
      <SectionTitle fontSize={"2xl"} heading={"h1"} />
      <HeaderWithBackButton title={"利用規約"} isUseBackButton={true} />
      <TermsOfService />
    </>
  )
}
