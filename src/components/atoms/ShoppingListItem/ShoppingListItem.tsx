"use client"

import { useState } from "react"

import { Checkbox } from "@mantine/core"

interface ShoppingListItemProps {
  name: string
  isCheckedProp: boolean
  isShowDeleteButton: boolean
  isEditing: boolean
  onDelete: () => void
}

export const ShoppingListItem = ({
  name,
  isCheckedProp = false,
  isShowDeleteButton = false,
  isEditing = false,
  onDelete,
}: ShoppingListItemProps) => {
  const [isChecked, setIsChecked] = useState(isCheckedProp)
  const checkboxTextColor = isChecked ? "text-Mauve-08" : "text-Mauve-12"
  const [itemName, setItemName] = useState(name)

  const toggleCheck = () => {
    setIsChecked(!isChecked)
  }

  const styles = {
    checkbox: { input: { cursor: "pointer" }, label: { cursor: "pointer" } },
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value)
  }

  return (
    <li className="flex max-w-[480px] items-center gap-2 px-8 py-2">
      <Checkbox color="cyan" radius="lg" styles={styles.checkbox} checked={isChecked} onChange={toggleCheck} />
      <input
        type="text"
        className={`text-sm ${checkboxTextColor}`}
        value={itemName}
        onChange={handleNameChange}
        readOnly={!isEditing}
      />
      {isShowDeleteButton && (
        <button type="button" className="text-sm text-Tomato-09" onClick={onDelete}>
          削除
        </button>
      )}
    </li>
  )
}
