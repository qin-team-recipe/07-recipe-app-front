interface SaveButtonProps {
  innerText: string
  onClick: () => void
  type: "primary" | "secondary"
}

export const SaveButton = ({ innerText, onClick, type }: SaveButtonProps) => {
  return (
    <button
      className={`h-[35px] w-[171px] rounded text-fs16
        ${type === "primary" && "bg-Tomato-09 text-Mauve-01"}
        ${type === "secondary" && "border-[1px] border-solid border-Tomato-07 text-Tomato-11"}
      `}
      onClick={onClick}
    >
      {innerText}
    </button>
  )
}
