"use client"
import { IngredientList } from "@/components/molecules/IngredientList/IngredientList"
import MyRecipeDetailsTop from "@/components/molecules/MyRecipeDetailsTop/MyRecipeDetailsTop"
import { RecipeStepList } from "@/components/molecules/RecipeStepList/RecipeStepList"
import { Tabs } from "@/components/organisms/Tabs/Tabs"

export default function MyRecipePage() {
  return (
    <div>
      <section>
        <MyRecipeDetailsTop />
      </section>
      <section className="mt-8 text-sm">
        <Tabs
          tabItems={[
            { label: "作り方", component: <RecipeStepList /> },
            { label: "材料", component: <IngredientList servingOfNumber={1} /> },
          ]}
        />
      </section>
    </div>
  )
}
