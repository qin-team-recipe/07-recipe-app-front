import { CircleChef } from "@/components/atoms/CircleChef/CircleChef"
import { SocialMediaService } from "@/components/atoms/SocialMediaService/SocialMediaService"
import { FollowOrFavoriteButton } from "@/components/atoms/buttons/FollowOrFavoriteButton/FollowOrFavoriteButton"

export type ChefDetailProps = {
  name: string
  id: string
  profile: string
  url: string
  image: string
  recipeCount: number
  followerCount: number
}

export const ChefDetail = (props: ChefDetailProps) => {
  return (
    <>
      <div className="h-8">
        <SocialMediaService />
      </div>
      <div className=" mb-2 flex">
        <div className="flex-1">
          <p className="text-2xl font-bold text-Mauve-12">{props.name}</p>
          <p className="mb-3 text-sm  text-Mauve-12">{props.id}</p>
        </div>
        <div className="float-right flex">
          <CircleChef icon={props.image} name={""} url={"/"} />
        </div>
      </div>
      <div>
        <p className="mb-4 text-sm font-normal text-Mauve-12">{props.profile}</p>
      </div>
      <div className="mb-3 flex text-sm text-Mauve-11">
        <div className="mr-5 flex">
          <p className="font-bold">{props.recipeCount}</p>
          レシピ
        </div>
        <div className="flex">
          <p className="font-bold">{props.followerCount}</p>フォロワー
        </div>
      </div>
      <section className="mb-5">
        <FollowOrFavoriteButton
          buttonType={"follow"}
          toggleFollowOrFavorite={function (): void {
            throw new Error("Function not implemented.")
          }}
          isFollowOrFavorite={false}
        />
      </section>
    </>
  )
}
