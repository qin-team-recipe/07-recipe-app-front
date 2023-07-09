import { LinkListItem, LINK_TYPE } from "../../atoms/LinkListItem/LinkListItem"

export const LinkTab = () => {
  const dummyData = [
    {
      index: 4,
      platform: LINK_TYPE["YOUTUBE"],
      linkTitle: "YOUTUBE",
      linkDescription: "",
      linkDestination: "https://youtube.com/",
    },
    {
      index: 14,
      platform: LINK_TYPE["TWITTER"],
      linkTitle: "Twitter",
      linkDescription: "",
      linkDestination: "https://twitter.com/",
    },
    {
      index: 24,
      platform: LINK_TYPE["INSTAGRAM"],
      linkTitle: "Instagram",
      linkDescription: "",
      linkDestination: "https://Instagram.com/",
    },
    {
      index: 34,
      platform: LINK_TYPE["OTHER"],
      linkTitle: "サイト",
      linkDescription: "https://www.google.com/",
      linkDestination: "https://www.google.com/",
    },
  ]

  return (
    <ul className="w-[390px]  gap-y-4 gap-x-3 ">
      {dummyData.map((v) => (
        <li key={v.key}>
        <LinkListItem
          key={v.index}
          platform={v.platform}
          linkTitle={v.linkTitle}
          linkDescription={v.linkDescription}
          linkDestination={v.linkDestination}
        />
        </li>
      ))}
    </ul>
  )
}
