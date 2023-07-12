import Image from "next/image"
import Link from "next/link"

const NOW_SLUG = {
  SEARCH_PAGE: "",
  FAVORITE_PAGE: "favorite",
  SHOPPING_PAGE: "shopping",
} as const

type NowSlugType = typeof NOW_SLUG

type NavigationProps = {
  nowSlug: NowSlugType[keyof NowSlugType]
}

const NavigationItems = [
  {
    title: "検索",
    slug: NOW_SLUG.SEARCH_PAGE,
    iconGray: "search_gray.svg",
    iconRed: "search_red.svg",
  },
  {
    title: "お気に入り",
    slug: NOW_SLUG.FAVORITE_PAGE,
    iconGray: "heart_gray.svg",
    iconRed: "heart_red.svg",
  },
  {
    title: "お買い物",
    slug: NOW_SLUG.SHOPPING_PAGE,
    iconGray: "cart_gray.svg",
    iconRed: "cart_red.svg",
  },
]

export const Navigation = ({ nowSlug }: NavigationProps) => {
  return (
    <nav className="w-[400px] text-center py-2">
      <ul className="text-Mauve-11  text-xs  m-auto flex  h-12">
        {NavigationItems.map((item, index) => (
          <li key={index} className="flex-1">
            <Link href={item.slug} className={nowSlug === item.slug ? "pointer-events-none" : ""}>
              <Image
                src={nowSlug === item.slug ? item.iconRed : item.iconGray}
                width={24}
                height={24}
                alt={item.slug}
                className="m-auto"
              />
              <p className={nowSlug === item.slug ? "text-Tomato-12" : ""}>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
