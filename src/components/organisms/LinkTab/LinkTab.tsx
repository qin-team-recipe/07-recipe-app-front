import { LinkListItem, LINK_TYPE } from "../../atoms/LinkListItem/LinkListItem"

export const LinkTab = () => {
  const dummyData = [
    {
      key: "aaaaaaaa",
      platform: LINK_TYPE["YOUTUBE"],
      linkTitle: "YOUTUBE",
      linkDescription: "",
      linkDestination: "https://youtube.com/",
    },
    {
      key: "bbbbbbbbb",
      platform: LINK_TYPE["TWITTER"],
      linkTitle: "Twitter",
      linkDescription: "",
      linkDestination: "https://twitter.com/",
    },
    {
      key: "ccccccc",
      platform: LINK_TYPE["INSTAGRAM"],
      linkTitle: "Instagram",
      linkDescription: "",
      linkDestination: "https://Instagram.com/",
    },
    {
      key: "ddddddddd",
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
