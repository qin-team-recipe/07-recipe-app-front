interface TextButtonProps {
  innerText: string
  onClick: () => void
  disabled?: boolean
  primary?: boolean
  className?: string
}

/**
 * テキストボタン
 * @param primary true:赤 false:灰色
 */
export const TextButton = ({ innerText, onClick, disabled = false, primary = true, className }: TextButtonProps) => {
  const textColor = primary ? "text-Tomato-09" : "text-Mauve-alpha-11 opacity-60"

  return (
    <button
      className={["mx-[8px]  my-0 font-sans text-fs16 font-bold", textColor, className, disabled && "opacity-20"].join(
        " ",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {innerText}
    </button>
  )
}
