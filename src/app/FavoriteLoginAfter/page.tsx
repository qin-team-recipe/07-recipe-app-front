"use client"
import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle"
import { LoadMoreButton } from "@/components/atoms/buttons/LoadMoreButton/LoadMoreButton"
import { FavoriteChefList } from "@/components/molecules/FavoriteChefList/FavoriteChefList"
import { Navigation } from "@/components/molecules/Navigation/Navigation"
import { RecipeList } from "@/components/molecules/RecipeList/RecipeList"
import HeaderWithSettingButton from "@/components/molecules/headers/HeaderWithSettingButton/HeaderWithSettingButton"
import { RecipeTab } from "@/components/organisms/RecipeTab/RecipeTab"

export default function FavoriteLoginAfterPage() {
  return (
    <>
      <HeaderWithSettingButton title={"お気に入り"} />
      {/* <LoginTop type={"favorite"} /> */}
      <section className="pt-5">
        <FavoriteChefList
          chefs={[
            {
              name: "山田シェフ",
              icon: "/assets/images/chef/small/1.png",
              url: "/",
            },
            {
              name: "田中シェフ",
              icon: "/assets/images/chef/small/2.png",
              url: "/",
            },
            {
              name: "後藤シェフ",
              icon: "/assets/images/chef/small/3.png",
              url: "/",
            },
            {
              name: "しまぶー",
              icon: "/assets/images/chef/small/4.png",
              url: "/",
            },
            {
              name: "しまぶー",
              icon: "/assets/images/chef/small/5.png",
              url: "/",
            },
            {
              name: "しまぶー",
              icon: "/assets/images/chef/small/6.png",
              url: "/",
            },
            {
              name: "しまぶー",
              icon: "/assets/images/chef/small/1.png",
              url: "/",
            },
            {
              name: "しまぶー",
              icon: "/assets/images/chef/small/1.png",
              url: "/",
            },
            {
              name: "しまぶー",
              icon: "/assets/images/chef/small/1.png",
              url: "/",
            },
            {
              name: "しまぶー",
              icon: "/assets/images/chef/small/1.png",
              url: "/",
            },
          ]}
        />
      </section>
      <section className="mb-10 mt-6 grid grid-cols-2 gap-4">
        <div className=" font-serif">
          <SectionTitle text="新着レシピ" fontSize="xl" heading="h1" />
        </div>
        <div className="flex justify-end">
          <LoadMoreButton url="/MoreSearchPage" />
        </div>
        <div className="col-span-2">
          <RecipeList horizontalScroll />
        </div>
      </section>
      <section className="">
        <RecipeTab text={"お気に入りレシピ"} />
      </section>
      <section>
        <Navigation />
      </section>
    </>
  )
}
