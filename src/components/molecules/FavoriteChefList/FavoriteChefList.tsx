import { CircleChef, CircleChefProps } from "@/components/atoms/CircleChef/CircleChef"

interface FavoriteChefListProps {
  chefs: CircleChefProps[]
}

export const FavoriteChefList = ({ chefs }: FavoriteChefListProps) => {
  return (
    <section>
      <p className=" mb-3 font-serif text-xl font-bold">シェフ</p>
      <ul className="flex max-w-[480px] gap-4 overflow-x-scroll pb-4">
        {chefs.map((chef, index) => (
          <li key={index}>
            <CircleChef icon={chef.icon} name={chef.name} url={chef.url} />
          </li>
        ))}
      </ul>
    </section>
  )
}
