import { ChevronDown, ChevronUp, Pencil, Trash } from "tabler-icons-react"

import { Menu } from "@mantine/core"

interface IngredientMenuProps {
  showMoveUp: boolean
  showMoveDown: boolean
  showEdit: boolean
}

export const IngredientMenu = ({ showMoveUp, showMoveDown, showEdit }: IngredientMenuProps) => {
  const commonColor = "#6F6E77"
  return (
    <Menu position="bottom-end" width={258}>
      <Menu.Target>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="assets/icons/tabler-icon-dots-vertical.svg" alt="メニュー" width={20} height={20} />
      </Menu.Target>

      <Menu.Dropdown>
        {showEdit && (
          <Menu.Item color={commonColor} icon={<Pencil />}>
            編集する
          </Menu.Item>
        )}
        {showMoveUp && (
          <Menu.Item color={commonColor} icon={<ChevronUp />}>
            上に移動する
          </Menu.Item>
        )}
        {showMoveDown && (
          <Menu.Item color={commonColor} icon={<ChevronDown />}>
            下に移動する
          </Menu.Item>
        )}
        <Menu.Divider />
        <Menu.Item color={commonColor} icon={<Trash />}>
          リストから削除する
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
