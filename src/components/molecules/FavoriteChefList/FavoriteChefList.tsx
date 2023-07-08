import React from "react"

import { CircleChef } from "@/components/atoms/CircleChef/CircleChef"
import { CircleChefProps } from "@/components/atoms/CircleChef/CircleChef"

interface FavoriteChefListProps {
  chefs: CircleChefProps[]
}

export const FavoriteChefList = ({ chefs }: FavoriteChefListProps) => {
  return (
    <>
      <p className="text-fs20 font-bold mb-3">シェフ</p>
      <div className="flex gap-4">
        {chefs.map((chef) => (
          <CircleChef key={chef.url} icon={chef.icon} name={chef.name} url={chef.url} />
        ))}
      </div>
    </>
  )
}
