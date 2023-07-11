import { Menu } from "@mantine/core"
import Image from "next/image"

import { ChevronDown, ChevronUp, Pencil, Trash } from "tabler-icons-react"

interface IngredientMenuProps {
  showMoveUp: boolean
  showMoveDown: boolean
  showEdit: boolean
}

export const IngredientMenu = ({ showMoveUp = true, showMoveDown = true, showEdit = true }: IngredientMenuProps) => {
  const commonColor = "#6F6E77"
  return (
    <Menu position="bottom-end" width={258}>
      <Menu.Target>
        <img src="assets/icons/tabler-icon-dots-vertical.svg" alt="メニュー" width={20} height={20} />
      </Menu.Target>

      <Menu.Dropdown>
        {showEdit && (
          <Menu.Item color={commonColor} icon={<Pencil color={commonColor} />}>
            編集する
          </Menu.Item>
        )}
        {showMoveUp && (
          <Menu.Item color={commonColor} icon={<ChevronUp color={commonColor} />}>
            上に移動する
          </Menu.Item>
        )}
        {showMoveDown && (
          <Menu.Item color={commonColor} icon={<ChevronDown color={commonColor} />}>
            下に移動する
          </Menu.Item>
        )}
        <Menu.Divider />
        <Menu.Item color={commonColor} icon={<Trash color={commonColor} />}>
          リストから削除する
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
