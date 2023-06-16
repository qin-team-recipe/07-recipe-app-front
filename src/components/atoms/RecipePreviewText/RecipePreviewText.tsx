interface RecipePreviewTextProps {
  previewTitle: string
  previewContent: string
}

export const RecipePreviewText = ({ previewTitle, previewContent }: RecipePreviewTextProps) => {
  return (
    <div className="flex flex-col items-start w-[160px] h-[46px] gap-[4px] m-0 p-0">
      <p className="text-Mauve-12 text-fs12 font-bold leading-[18px]  m-0 p-0 line-clamp-2">{previewTitle}</p>
      <p className="text-Mauve-11 text-fs10 font-normal leading-[12px]  m-0 p-0 line-clamp-1">{previewContent}</p>
    </div>
  )
}
