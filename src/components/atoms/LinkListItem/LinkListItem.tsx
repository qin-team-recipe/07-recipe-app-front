import Link from "next/link"

type LinkListItemProps = {
  linkDestination: string
}

export const LinkListItem = ({ linkDestination }: LinkListItemProps) => {
  return (
    <Link href={linkDestination}>
      <div className="inline-flex h-16 w-[390px] items-center justify-start gap-4 border border-Mauve-06 px-4 py-3">
        <div className="inline-flex grow flex-col items-start justify-start gap-1">
          <div className="font-Inter text-fs16 text-Mauve-12">{linkDestination}</div>
        </div>
      </div>
    </Link>
  )
}
