"use client"

import { FollowOrFavoriteButton } from "@/components/atoms/buttons/FollowOrFavoriteButton/FollowOrFavoriteButton"
import { IngredientList } from "@/components/molecules/IngredientList/IngredientList"
import RecipeDetailsTop from "@/components/molecules/RecipeDetailsTop/RecipeDetailsTop"
import { RecipeStepList } from "@/components/molecules/RecipeStepList/RecipeStepList"
import { Tabs } from "@/components/organisms/Tabs/Tabs"

export default function RecipeDetailsPage() {
  return (
    <>
      <RecipeDetailsTop />
      <FollowOrFavoriteButton
        buttonType={"favorite"}
        toggleFollowOrFavorite={function (): void {
          throw new Error("Function not implemented.")
        }}
        isFollowOrFavorite={false}
      />
      <Tabs
        tabItems={[
          {
            label: "作り方",
            component: <RecipeStepList />,
          },
          { label: "材料", component: <IngredientList servingOfNumber={1} /> },
        ]}
      />
    </>
  )
}
