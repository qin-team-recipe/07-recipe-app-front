/**
 * TabsコンポーネントのStorybookの確認用
 */

type Props = {
  bgColor: string
}

const SampleTabContent = (props: Props) => {
  return (
    <div className={`h-96 w-full bg-${props.bgColor}`}>
      サンプルのコンポーネントです
      <br />
      サンプルのコンポーネントです
      <br />
      サンプルのコンポーネントです
      <br />
      サンプルのコンポーネントです
      <br />
      サンプルのコンポーネントです
      <br />
      サンプルのコンポーネントです
    </div>
  )
}

export default SampleTabContent
