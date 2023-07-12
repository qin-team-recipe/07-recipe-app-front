import Image from "next/image"
import Link from "next/link"

export const LINK_TYPE = {
  YOUTUBE: "youtube",
  TWITTER: "twitter",
  INSTAGRAM: "instagram",
  OTHER: "website_link",
} as const

type LINK_TYPE = (typeof LINK_TYPE)[keyof typeof LINK_TYPE]
type LinkListItemProps = {
  platform: LINK_TYPE
  linkTitle: string
  linkDescription?: string
  linkDestination: string
}

export const LinkListItem = ({ platform, linkTitle, linkDescription, linkDestination }: LinkListItemProps) => {
  return (
    <Link href={linkDestination}>
      <div className="inline-flex h-16 w-[390px] items-center justify-start gap-4 border border-Mauve-06 px-4 py-3">
        <Image src={`/${platform}_icon.svg`} width={36} height={36} alt={`${platform}Icon`} />
        <div className="inline-flex grow flex-col items-start justify-start gap-1">
          <div className="font-Inter text-fs16 text-Mauve-12">{linkTitle}</div>
          {platform === LINK_TYPE["OTHER"] && (
            <div className="font-Inter text-fs14 text-Mauve-11">{linkDescription}</div>
          )}
        </div>

        <Image className="mr-1" src="/arrow_link.svg" width={16} height={16} alt="addIcon" />
      </div>
    </Link>
  )
}
