"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const SOCIAL_TYPE = {
  YOUTUBE: "youtube",
  TWITTER: "twitter",
  INSTAGRAM: "instagram",
  TIKTOK: "tiktok",
  FACEBOOK: "facebook",
  WEBSITE: "website",
  OTHER: "other",
} as const

type SOCIAL_TYPE = (typeof SOCIAL_TYPE)[keyof typeof SOCIAL_TYPE]
type SocialMediaServiceProps = {
  platform?: SOCIAL_TYPE
  title?: string
  url?: string
}
type UserSNS = {
  platform: string
  title: string
  url: string
}

const userSNS: UserSNS[] = [
  {
    platform: SOCIAL_TYPE["YOUTUBE"],
    title: "youtube",
    url: "https://youtube.com/",
  },
  {
    platform: SOCIAL_TYPE["INSTAGRAM"],
    title: "Instagram",
    url: "https://Instagram.com/",
  },
  {
    platform: SOCIAL_TYPE["TIKTOK"],
    title: "TikTok",
    url: "https://tiktok.com/",
  },
  {
    platform: SOCIAL_TYPE["TWITTER"],
    title: "Twitter",
    url: "https://twitter.com/",
  },
  {
    platform: SOCIAL_TYPE["FACEBOOK"],
    title: "Facebook",
    url: "https://facebook.com/",
  },
  {
    platform: SOCIAL_TYPE["WEBSITE"],
    title: "hogehoge.com",
    url: "https://google.com/",
  },
  {
    platform: SOCIAL_TYPE["WEBSITE"],
    title: "foobar.com",
    url: "https://google.com/",
  },
]

export const SocialMediaService = ({ platform }: SocialMediaServiceProps) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="">
      <div className="relative float-right flex gap-3">
        <Link href={userSNS[0].url}>
          <Image
            src={`/assets/icons/social/${userSNS[0].platform}_icon.svg`}
            width={24}
            height={24}
            alt={`${userSNS[0].platform}Icon`}
          />
        </Link>

        <Link href={userSNS[1].url}>
          <Image
            src={`/assets/icons/social/${userSNS[1].platform}_icon.svg`}
            width={24}
            height={24}
            alt={`${userSNS[1].platform}Icon`}
          />
        </Link>

        <button
          type="button"
          onClick={() => {
            setIsShow((isShow) => {
              return !isShow
            })
          }}
        >
          <Image src={`/assets/icons/social/other_icon.svg`} width={24} height={24} alt={`${platform}Icon`} />
          {isShow ? (
            <ul>
              <li className=" border-1  text-Mauve-6 absolute  right-0 w-64 rounded-md border border-Mauve-06  bg-White shadow-md">
                {userSNS.map((item, index) =>
                  index === 0 || index === 1 || item.platform === SOCIAL_TYPE["WEBSITE"] ? (
                    <></>
                  ) : (
                    <div key={index} className="m-2">
                      <Link href={item.url} className=" flex ">
                        <Image
                          src={`/assets/icons/social/${item.platform}_icon.svg`}
                          width={16}
                          height={16}
                          alt={`${platform}Icon`}
                          className="mr-2"
                        />
                        <p className="font-inter text-sm text-Mauve-11">{item.title}</p>
                      </Link>
                    </div>
                  ),
                )}

                <li className="m-0 border-t-2 border-Mauve-06 bg-White p-0">
                  {userSNS.map((item, index) =>
                    item.platform === SOCIAL_TYPE["WEBSITE"] ? (
                      <div key={index} className="m-2">
                        <Link href={item.url} className=" flex ">
                          <Image
                            src={`/assets/icons/social/${item.platform}_icon.svg`}
                            width={16}
                            height={16}
                            alt={`${platform}Icon`}
                            className="mr-2"
                          />
                          <p className="font-inter text-sm text-Mauve-11">{item.title}</p>
                        </Link>
                      </div>
                    ) : (
                      <></>
                    ),
                  )}
                </li>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </button>
      </div>
    </div>
  )
}
