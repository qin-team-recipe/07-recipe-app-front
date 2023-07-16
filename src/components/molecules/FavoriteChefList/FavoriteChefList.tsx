import React from "react"

import { CircleChef } from "@/components/atoms/CircleChef/CircleChef"
import { CircleChefProps } from "@/components/atoms/CircleChef/CircleChef"

interface FavoriteChefListProps {
  chefs: CircleChefProps[]
}

export const FavoriteChefList = ({ chefs }: FavoriteChefListProps) => {
  return (
    <section>
      <p className="text-xl font-bold mb-3">シェフ</p>
      <ul className="flex gap-4 max-w-[480px] overflow-x-scroll">
        {chefs.map((chef, index) => (
          <li key={index}>
            <CircleChef icon={chef.icon} name={chef.name} url={chef.url} />
          </li>
        ))}
      </ul>
    </section>
  )
}
