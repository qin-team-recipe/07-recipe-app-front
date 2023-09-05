import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { RecipeList } from "@/components/molecules/RecipeList/RecipeList"

type SectionTitleProps = {
  text: string
}

export const RecipeTab = (props: SectionTitleProps) => {
  return (
    <section>
      <div className="mb-2 mt-5">
        <SectionTitle text={props.text} fontSize="xl" heading="h2" />
      </div>
      <RecipeList />
    </section>
  )
}
