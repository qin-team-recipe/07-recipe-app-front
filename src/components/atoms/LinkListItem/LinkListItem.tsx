import Image from "next/image"
import Link from "next/link"

export const LINK_TYPE = {
  TWITTER: "TWITTER",
  INSTAGRAM: "INSTAGRAM",
  OTHER: "OTHER",
} as const

type LINK_TYPE = keyof typeof LINK_TYPE
type LinkListItemProps = Required<{
  linkType: LINK_TYPE
  linkTitle: string
  linkDiscription: string
  linkDestination: string
}>

export const LinkListItem = ({ linkType, linkTitle, linkDiscription, linkDestination }: LinkListItemProps) => {
  return (
    <div className="w-[390px] h-16 px-4 py-3 border border-Mauve-06 justify-start items-center gap-4 inline-flex">
      {(() => {
        if (linkType === LINK_TYPE.TWITTER) {
          return <Image src="/twitter_icon.svg" width={36} height={36} alt="twitterIcon" />
        } else if (linkType === LINK_TYPE.INSTAGRAM) {
          return <Image src="/instagram_icon.svg" width={36} height={36} alt="instagramIcon" />
        } else {
          return <Image src="/link_icon.svg" width={36} height={36} alt="linkIcon" />
        }
      })()}
      <div className="grow flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-Mauve-12 text-fs16 font-Inter">{linkTitle}</div>
        <div className="text-Mauve-11 text-fs14 font-Inter">{linkDiscription}</div>
      </div>
      <Link href={linkDestination}>
        <Image className="mr-1" src="/arrow_link.svg" width={16} height={16} alt="addIcon" />
      </Link>
    </div>
  )
}
