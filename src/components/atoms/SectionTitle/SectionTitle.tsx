export const FONT_SIZE = {
  XXL: "2xl",
  XL: "xl",
  LG: "lg",
  BASE: "base",
} as const

type FontSizeType = typeof FONT_SIZE

export const HEADING = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
} as const

type HeadingType = typeof HEADING

export interface SectionTitleProps {
  fontSize: FontSizeType[keyof FontSizeType]
  heading: HeadingType[keyof HeadingType]
  text?: string
}

export const SectionTitle = ({ heading, text, fontSize }: SectionTitleProps) => {
  switch (heading) {
    case HEADING.H1:
      return <h1 className={`font-bold text-${fontSize}`}>{text}</h1>

    case HEADING.H2:
      return <h2 className={`font-bold text-${fontSize}`}>{text}</h2>

    case HEADING.H3:
      return <h3 className={`font-bold text-${fontSize}`}>{text}</h3>

    case HEADING.H4:
      return <h4 className={`font-bold text-${fontSize}`}>{text}</h4>
  }
}
