/**
 * 「マイレシピを追加する」ボタン
 *
 * TODO:
 * ロジック実装時、propsのonClick関数も固定にして良さそうであれば、
 * propsは受け取らないように実装し直しても良さそう
 */

interface FloatingButtonProps {
  onClick: () => void
}

export const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <button
      className="w-[200px] h-[48px] fixed left-1/2 bottom-6 -translate-x-1/2 text-fs16 font-bold text-Mauve-01 bg-Tomato-09 rounded-full shadow-md"
      onClick={onClick}
    >
      マイレシピを追加する
    </button>
  )
}
