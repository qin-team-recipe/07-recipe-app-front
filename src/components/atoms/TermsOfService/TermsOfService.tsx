export type terms = {
  title: string
  content: string
}

export const TermsOfServiceItems: terms[] = [
  {
    title: "第一項",
    content:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。",
  },
  {
    title: "第二項",
    content:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。",
  },
]

export const TermsOfService = () => {
  return (
    <div>
      {TermsOfServiceItems.map((item, index) => (
        <div key={index} className="py-2">
          <h1 className="my-4 font-bold">{item.title}</h1>
          <p className="">{item.content}</p>
        </div>
      ))}
    </div>
  )
}
