import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { RecipeList } from "@/components/molecules/RecipeList/RecipeList"

export function RecipeTab() {
  return (
    <section>
      <div className="mb-2 mt-5">
        <SectionTitle text="話題のレシピ" fontSize="xl" heading="h2" />
      </div>
      <RecipeList />
    </section>
  )
}
