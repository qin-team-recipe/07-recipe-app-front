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
      className="fixed bottom-6 left-1/2 h-[48px] w-[200px] -translate-x-1/2 rounded-full bg-Tomato-09 text-base font-bold text-Mauve-01 shadow-md"
      onClick={onClick}
    >
      マイレシピを追加する
    </button>
  )
}
