import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { OtherChefList } from "@/components/molecules/OtherChefList/OtherChefList"

export function ChefTab() {
  return (
    <section>
      <div className="mb-2 mt-5">
        <SectionTitle text="シェフ一覧" fontSize="xl" heading="h2" />
      </div>
      <OtherChefList />
    </section>
  )
}
