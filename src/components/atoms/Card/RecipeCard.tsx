interface RecipeCardProps {
  index: number
  title: string
  description: string
}

export const RecipeCard = ({ index, title, description }: RecipeCardProps) => {
  return (
    <li className="list-none py-2 px-4 border-0 border-b-[1px] border-Mauve-07 border-solid flex max-w-[400px] box-border">
      <p className="text-Mauve-01 text-fs12 leading-[18px] text-center my-0 w-[18px] h-[18px] bg-Tomato-11 rounded-full">
        {index}
      </p>
      <div className="ml-2 flex-1">
        <h3 className="text-Mauve-12 text-fs14 leading-[18px] my-0">{title}</h3>
        <p className="text-Mauve-10 text-fs10 leading-4 mb-0 mt-1">{description}</p>
      </div>
    </li>
  )
}
