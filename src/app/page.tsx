import { SearchBar } from "@/components/atoms/SearchBar/SearchBar"
import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { LoadMoreButton } from "@/components/atoms/buttons/LoadMoreButton/LoadMoreButton"
import { FeatureChefList } from "@/components/molecules/FeatureChefList/FeatureChefList"
import { Navigation } from "@/components/molecules/Navigation/Navigation"
import { OtherChefList } from "@/components/molecules/OtherChefList/OtherChefList"
import { RecipeList } from "@/components/molecules/RecipeList/RecipeList"

export default function SearchPage() {
  return (
    <>
      <section className="mb-4">
        <SearchBar />
      </section>
      <section className="mb-10 grid gap-4 ">
        <div className="font-serif">
          <SectionTitle text="注目のシェフ" fontSize="xl" heading="h1" />
        </div>
        <FeatureChefList />
      </section>
      <section className="mb-10 grid grid-cols-2 gap-4">
        <div className="font-serif">
          <SectionTitle text="話題のレシピ" fontSize="xl" heading="h1" />
        </div>
        <div className="flex justify-end">
          <LoadMoreButton url="/MoreSearchPage" />
        </div>
        <div className="col-span-2">
          <RecipeList horizontalScroll />
        </div>
      </section>
      <section className="mb-10 grid grid-cols-2 gap-4">
        <div className="font-serif">
          <SectionTitle text="シェフ" fontSize="xl" heading="h1" />
        </div>
        <div className="flex justify-end">
          <LoadMoreButton url="" />
        </div>
        <div className="col-span-2">
          <OtherChefList />
        </div>
      </section>
      <section>
        <Navigation />
      </section>
    </>
  )
}
