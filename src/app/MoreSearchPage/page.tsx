import { SearchBar } from "@/components/atoms/SearchBar/SearchBar"
import { ChefTab } from "@/components/organisms/ChefTab/ChefTab"
import { RecipeTab } from "@/components/organisms/RecipeTab/RecipeTab"
import { Tabs } from "@/components/organisms/Tabs/Tabs"

export default function MoreSearchPage() {
  return (
    <>
      <section className="mb-4">
        <SearchBar />
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
