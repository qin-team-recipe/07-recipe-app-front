"use client"
import { ChefDetail } from "@/components/molecules/ChefDetail/ChefDetail"
import { RecipeTab } from "@/components/organisms/RecipeTab/RecipeTab"
import { Tabs } from "@/components/organisms/Tabs/Tabs"

export default function ChefPage() {
  return (
    <>
      <section>
        <ChefDetail
          name={"山田シェフ"}
          id={"foobarid"}
          profile={
            "初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！ 絶賛発売中！"
          }
          image="/assets/images/feature_chef.png"
          url={"/"}
          recipeCount={123}
          followerCount={456}
        />
      </section>

      <section className="text-sm">
        <Tabs
          tabItems={[
            { label: "新着レシピ", component: <RecipeTab text={""} /> },
            { label: "人気レシピ", component: <RecipeTab text={""} /> },
          ]}
        />
      </section>
    </>
  )
}
