export interface RecipeStepItemProps {
  index: number
  title: string
  description: string
}

export const RecipeStepItem = ({ index, title, description }: RecipeStepItemProps) => {
  return (
    <li className="box-border flex max-w-[480px] list-none border-0 border-b-[1px] border-solid border-Mauve-07 px-4 py-2">
      <p className="my-0 h-[18px] w-[18px] rounded-full bg-Tomato-11 text-center text-fs12 leading-[18px] text-Mauve-01">
        {index}
      </p>
      <div className="ml-2 flex-1">
        <h3 className="my-0 text-fs14 leading-[18px] text-Mauve-12">{title}</h3>
        <p className="mb-0 mt-1 text-fs10 leading-4 text-Mauve-10">{description}</p>
      </div>
    </li>
  )
}
