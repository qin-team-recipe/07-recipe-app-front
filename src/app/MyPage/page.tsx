"use client"
import Link from "next/link"

import { FloatingButton } from "@/components/atoms/buttons/FloatingButton/FloatingButton"
import { MyPageDetail } from "@/components/molecules/MyPageDetail/MyPageDetail"
import { RecipeTab } from "@/components/organisms/RecipeTab/RecipeTab"
import { Tabs } from "@/components/organisms/Tabs/Tabs"

export default function MyPage() {
  return (
    <>
      <section>
        <MyPageDetail
          name={"しまぶーシェフ"}
          id={"foobarid"}
          profile={
            "初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！ 絶賛発売中！"
          }
          // image="/assets/images/feature_chef.png"
          image="/assets/images/chef/small/7.png"
          url={"/ProfilePage"}
          recipeCount={123}
          followerCount={456}
        />
        <section className="mb-5">
          <Link
            href={"/ProfilePage"}
            className="inline-block h-6 w-full rounded border-[1px] border-solid border-Mauve-12 px-3  text-center text-sm text-Mauve-12"
          >
            プロフィールを編集
          </Link>
        </section>
      </section>
      <section className="text-sm">
        <Tabs
          tabItems={[
            { label: "新着レシピ", component: <RecipeTab text={""} /> },
            { label: "人気レシピ", component: <RecipeTab text={""} /> },
          ]}
        />
      </section>
      <FloatingButton
        onClick={function (): void {
          throw new Error("Function not implemented.")
        }}
      />
    </>
  )
}
