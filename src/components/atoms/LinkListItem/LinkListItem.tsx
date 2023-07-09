import Image from "next/image"
import Link from "next/link"

export const LINK_TYPE = {
  YOUTUBE: "youtube",
  TWITTER: "twitter",
  INSTAGRAM: "instagram",
  OTHER: "website_link",
} as const

type LINK_TYPE = (typeof LINK_TYPE)[keyof typeof LINK_TYPE]
type LinkListItemProps = Required<{
  platform: LINK_TYPE
  linkTitle: string
  linkDescription: string
  linkDestination: string
}>

export const LinkListItem = ({ platform, linkTitle, linkDescription, linkDestination }: LinkListItemProps) => {
  return (
    <Link href={linkDestination}>
      <div className="w-[390px] h-16 px-4 py-3 border border-Mauve-06 justify-start items-center gap-4 inline-flex">
        <Image src={`/${platform}_icon.svg`} width={36} height={36} alt={`${platform}Icon`} />
        <div className="grow flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-Mauve-12 text-fs16 font-Inter">{linkTitle}</div>
          {platform === LINK_TYPE["OTHER"] && linkDescription && (
            <div className="text-Mauve-11 text-fs14 font-Inter">{linkDescription}</div>
          )}
        </div>

        <Image className="mr-1" src="/arrow_link.svg" width={16} height={16} alt="addIcon" />
      </div>
    </Link>
  )
}
