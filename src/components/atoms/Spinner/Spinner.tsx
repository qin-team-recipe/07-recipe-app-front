/**
 * appRouterのloading.tsxで参照するためのローダーUI
 * https://mantine.dev/core/loader/
 * TODO: 色、サイズ変更可能なので、デザインとの親和性に違和感あったら変更する
 */

import { Loader } from "@mantine/core"

export default function Spinner() {
  return (
    <div className="flex justify-center my-32">
      <Loader size="xl" color="blue" />
    </div>
  )
}