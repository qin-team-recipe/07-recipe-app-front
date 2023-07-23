export interface RecipeStepItemProps {
  index: number
  text: string
}

export const RecipeStepItem = ({ index, text }: RecipeStepItemProps) => {
  return (
    <li className="box-border flex max-w-[480px] list-none border-0 border-b-[1px] border-solid border-Mauve-07 px-4 py-2">
      <p className=" h-[20px] w-[20px] rounded-full bg-Tomato-11 text-center text-sm text-Mauve-01">{index}</p>
      <p className="flex-1 ml-2 text-sm text-Mauve-12">{text}</p>
    </li>
  )
}
