interface RecipeCardProps {
  index: number
  title: string
  description: string
}

export const RecipeCard = ({ index, title, description }: RecipeCardProps) => {
  return (
    <li className="list-none py-2 px-4 border-0 border-b-[1px] border-[#DCDBDD] border-solid flex max-w-[400px] box-border">
      <p className="my-0 w-[18px] h-[18px] bg-[#CA3214] text-center rounded-full text-xs text-white leading-[18px]">
        {index}
      </p>
      <div className="ml-2 flex-1">
        <h3 className="text-[#1A1523] text-[14px] leading-[18px] my-0">{title}</h3>
        <p className="text-[10px] leading-4 mb-0 mt-1 text-[#86848D]">{description}</p>
      </div>
    </li>
  )
}
