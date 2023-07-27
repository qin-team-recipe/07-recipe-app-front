import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { RecipeList } from "@/components/molecules/RecipeList/RecipeList"

export function RecipeTab() {
  return (
    <section>
      <div className="mt-5 mb-2">
        <SectionTitle text="話題のレシピ" fontSize="xl" heading="h2" />
      </div>
      <RecipeList />
    </section>
  )
}
