interface RecipePreviewTextProps {
  previewTitle: string
  previewContent: string
}

export const RecipePreviewText = ({ previewTitle, previewContent }: RecipePreviewTextProps) => {
  return (
    <div className="grid items-start w-[173px] h-[46px]">
      <p className="text-Mauve-12 text-fs12 font-bold leading-3 line-clamp-2">{previewTitle}</p>
      <p className="text-Mauve-11 text-fs10 font-normal leading-[10px] line-clamp-1">{previewContent}</p>
    </div>
  )
}
