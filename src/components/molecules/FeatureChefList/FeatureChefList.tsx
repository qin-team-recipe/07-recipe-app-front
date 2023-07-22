import { FeatureChef } from "@/components/atoms/FeatureChef/FeatureChef"

const dummyData = [
  {
    id: "11111",
    icon: "/assets/images/feature_chef.png",
    name: "bbb",
    url: "ccc",
  },
  {
    id: "22222",
    icon: "/assets/images/feature_chef.png",
    name: "bbb",
    url: "ccc",
  },
  {
    id: "33333",
    icon: "/assets/images/feature_chef.png",
    name: "bbb",
    url: "ccc",
  },
  {
    id: "44444",
    icon: "/assets/images/feature_chef.png",
    name: "bbb",
    url: "ccc",
  },
]

export const FeatureChefList = () => {
  return (
    <ul className={"flex max-w-[480px] flex-nowrap justify-between gap-4  overflow-x-auto"}>
      {dummyData.map((chef) => (
        <li key={chef.id} className="min-w-[140px] max-w-[140px]">
          <FeatureChef icon={chef.icon} name={chef.name} url={chef.url} />
        </li>
      ))}
    </ul>
  )
}
