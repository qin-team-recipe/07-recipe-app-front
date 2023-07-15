import { LINK_TYPE, LinkListItem } from "../../atoms/LinkListItem/LinkListItem"

export const LinkTab = () => {
  const dummyData = [
    {
      id: "aaaaaaaa",
      platform: LINK_TYPE["YOUTUBE"],
      linkTitle: "YOUTUBE",
      linkDescription: "",
      linkDestination: "https://youtube.com/",
    },
    {
      id: "bbbbbbbbb",
      platform: LINK_TYPE["TWITTER"],
      linkTitle: "Twitter",
      linkDescription: "",
      linkDestination: "https://twitter.com/",
    },
    {
      id: "ccccccc",
      platform: LINK_TYPE["INSTAGRAM"],
      linkTitle: "Instagram",
      linkDescription: "",
      linkDestination: "https://Instagram.com/",
    },
    {
      id: "ddddddddd",
      platform: LINK_TYPE["OTHER"],
      linkTitle: "サイト",
      linkDescription: "https://www.google.com/",
      linkDestination: "https://www.google.com/",
    },
  ]

  return (
    <ul className="w-[390px]  gap-x-3 gap-y-4 ">
      {dummyData.map((v) => (
        <li key={v.id}>
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
