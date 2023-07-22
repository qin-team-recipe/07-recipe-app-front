"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NOW_SLUG = {
  SEARCH_PAGE: "/",
  FAVORITE_PAGE: "/favorite",
  SHOPPING_PAGE: "/shopping",
} as const

const NavigationItems = [
  {
    title: "検索",
    slug: NOW_SLUG.SEARCH_PAGE,
    iconGray: "assets/icons/navigation/search_gray.svg",
    iconRed: "assets/icons/navigation/search_red.svg",
  },
  {
    title: "お気に入り",
    slug: NOW_SLUG.FAVORITE_PAGE,
    iconGray: "assets/icons/navigation/heart_gray.svg",
    iconRed: "assets/icons/navigation/heart_red.svg",
  },
  {
    title: "お買い物",
    slug: NOW_SLUG.SHOPPING_PAGE,
    iconGray: "assets/icons/navigation/cart_gray.svg",
    iconRed: "assets/icons/navigation/cart_red.svg",
  },
]

export const Navigation = () => {
  const currentPath = usePathname()
  if (!Object.values<string>(NOW_SLUG).includes(currentPath)) return <></>

  return (
    <nav className="fixed bottom-0 w-full bg-Mauve-01  py-2 text-center md:max-w-[480px]">
      <ul className="flex  text-xs text-Mauve-11">
        {NavigationItems.map((item, index) => (
          <li key={index} className="flex-1">
            <Link href={item.slug} className={currentPath === item.slug ? "pointer-events-none" : ""}>
              <Image
                src={currentPath === item.slug ? item.iconRed : item.iconGray}
                width={24}
                height={24}
                alt={item.slug}
                className="m-auto"
              />
              <p className={currentPath === item.slug ? "text-Tomato-12" : ""}>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
