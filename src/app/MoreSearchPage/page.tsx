import { SearchBar } from "@/components/atoms/SearchBar/SearchBar"
import { BackButton } from "@/components/atoms/buttons/BackButton/BackButton"
import { ChefTab } from "@/components/organisms/ChefTab/ChefTab"
import { RecipeTab } from "@/components/organisms/RecipeTab/RecipeTab"
import { Tabs } from "@/components/organisms/Tabs/Tabs"

export default function MoreSearchPage() {
  return (
    <>
      <section className="flex mb-4">
        <BackButton color="black" className="mr-3" />
        <div className="flex-auto">
          <SearchBar />
        </div>
      </section>

      <Tabs
        tabItems={[
          { label: "レシピ", component: <RecipeTab /> },
          { label: "シェフ", component: <ChefTab /> },
        ]}
      />
    </>
  )
}
