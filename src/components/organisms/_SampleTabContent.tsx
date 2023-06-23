/**
 * TabコンポーネントのStorybookの確認用
 */

type Props = {
  bgColor: string
}

const SampleTabContent = (props: Props) => {
  return (
    <div className={`w-full h-96 bg-${props.bgColor}`}>
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
