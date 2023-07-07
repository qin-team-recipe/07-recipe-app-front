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
        ${type === "secondary" && "text-Tomato-11 border-Tomato-07 border-solid border-[1px]"}
      `}
      onClick={onClick}
    >
      {innerText}
    </button>
  )
}
