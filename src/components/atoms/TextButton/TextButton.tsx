interface TextButtonProps {
  innerText: string;
  onClick: () => void;
  diabled?: boolean;
  primary?: boolean;
  className?: string;
}

/**
 * テキストボタン
 * @param primary true:赤 false:灰色
 */
export const TextButton = ({ innerText, onClick, diabled = false, primary = true, className }: TextButtonProps) => {
  const textColor = primary ? 'text-Tomato-09' : 'text-Mauve-alpha-11 opacity-60';
  // storybookの型に合わせるため必ずElementを返す
  return diabled ? <></> : <button className={['text-fs16  font-bold font-sans mx-[8px] my-0', textColor, className].join(" ")} onClick={onClick}>{innerText}</button>
}