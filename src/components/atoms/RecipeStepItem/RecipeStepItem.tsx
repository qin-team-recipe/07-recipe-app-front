export interface RecipeStepItemProps {
  index: number
  text: string
  handleOpenModal?: () => void
}

export const RecipeStepItem = ({ index, text, handleOpenModal }: RecipeStepItemProps) => {
  return (
    <li
      onClick={handleOpenModal}
      className="box-border flex max-w-[480px] list-none border-0 border-b-[1px] border-solid border-Mauve-07 px-4 py-2"
    >
      <p className=" h-[20px] w-[20px] rounded-full bg-Tomato-11 text-center text-sm text-Mauve-01">{index}</p>
      <p className="ml-2 flex-1 text-sm text-Mauve-12">{text}</p>
    </li>
  )
}
