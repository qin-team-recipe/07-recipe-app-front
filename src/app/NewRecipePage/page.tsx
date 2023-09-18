import { NewRecipeList } from "@/components/molecules/NewRecipeList/NewRecipeList"
import HeaderWithBackButton from "@/components/molecules/headers/HeaderWithBackButton/HeaderWithBackButton"

export default function NewRecipePage() {
  return (
    <>
      <section className="font-serif">
        <HeaderWithBackButton title={"新着レシピ"} isUseBackButton={true} />
      </section>
      <section className="mt-5">
        <NewRecipeList />
      </section>
    </>
  )
}
