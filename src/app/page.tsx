import { SearchBar } from "@/components/atoms/SearchBar/SearchBar"
import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { FeatureChefList } from "@/components/molecules/FeatureChefList/FeatureChefList"
import { OtherChefList } from "@/components/molecules/OtherChefList/OtherChefList"
import { RecipeList } from "@/components/molecules/RecipeList/RecipeList"

export default function SearchPage() {
  return (
    <>
      <section className="mb-4">
        <SearchBar />
      </section>
      <section className="mb-10 grid gap-4">
        <SectionTitle text="注目のシェフ" fontSize="xl" heading="h1" />
        <FeatureChefList />
      </section>
      <section className="mb-10 grid gap-4">
        <SectionTitle text="話題のレシピ" fontSize="xl" heading="h1" />
        <RecipeList horizontalScroll />
      </section>
      <section className="mb-10 grid gap-4">
        <SectionTitle text="シェフ" fontSize="xl" heading="h1" />
        <OtherChefList />
      </section>
    </>
  )
}
