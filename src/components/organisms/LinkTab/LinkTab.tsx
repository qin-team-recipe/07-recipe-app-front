import { LinkListItem, LINK_TYPE } from "../../atoms/LinkListItem/LinkListItem"

export const LinkTab = () => {
  const dummyData = [
    {
      index: 4,
      platform: LINK_TYPE["YOUTUBE"],
      linkTitle: "Twitter",
      linkDiscription: "@username",
      linkDestination: "https://youtube.com/",
    },
    {
      index: 14,
      platform: LINK_TYPE["TWITTER"],
      linkTitle: "Twitter",
      linkDiscription: "@username",
      linkDestination: "https://twitter.com/",
    },
    {
      index: 24,
      platform: LINK_TYPE["INSTAGRAM"],
      linkTitle: "Instagram",
      linkDiscription: "@username",
      linkDestination: "https://Instagram.com/",
    },
    {
      index: 34,
      platform: LINK_TYPE["OTHER"],
      linkTitle: "サイト",
      linkDiscription: "https://www.google.com/",
      linkDestination: "https://www.google.com/",
    },
  ]

  return (
    <div className="w-[390px]  gap-y-4 gap-x-3 ">
      {dummyData.map((v) => (
        <LinkListItem
          key={v.index}
          platform={v.platform}
          linkTitle={v.linkTitle}
          linkDiscription={v.linkDiscription}
          linkDestination={v.linkDestination}
        />
      ))}
    </div>
  )
}