import { LinkListItem, LINK_TYPE } from "../../atoms/LinkListItem/LinkListItem"

export const LinkTab = () => {
  const dummyData = [
    {
      index: 14,
      linkType: LINK_TYPE["TWITTER"],
      linkTitle: "Twitter",
      linkDiscription: "@username",
      linkDestination: "https://twitter.com/",
    },
    {
      index: 24,
      linkType: LINK_TYPE["INSTAGLAM"],
      linkTitle: "Instagram",
      linkDiscription: "@username",
      linkDestination: "https://Instagram.com/",
    },
    {
      index: 34,
      linkType: LINK_TYPE["OTHER"],
      linkTitle: "サイト",
      linkDiscription: "https://www.google.com/",
      linkDestination: "https://www.google.com/",
    },
  ]

  return (
    <div className="w-[358px] mx-4 my-5  gap-y-4 gap-x-3 ">
      {dummyData.map((v) => (
        <LinkListItem
          key={v.index}
          linkType={v.linkType}
          linkTitle={v.linkTitle}
          linkDiscription={v.linkDiscription}
          linkDestination={v.linkDestination}
        />
      ))}
    </div>
  )
}
