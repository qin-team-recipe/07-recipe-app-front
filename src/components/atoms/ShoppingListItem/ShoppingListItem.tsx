"use client"

import { Checkbox } from "@mantine/core"
import { useState } from "react"

interface ShoppingListItemProps {
  name: string
  description: string
  isCheckedProp: boolean
  onDelete: () => void
}

export const ShoppingListItem = ({ name, description, isCheckedProp = false, onDelete }: ShoppingListItemProps) => {
  const [isChecked, setIsChecked] = useState(isCheckedProp)

  const checkboxTextColor = isChecked ? "text-Mauve-08" : "text-Mauve-12"
  const checkboxLabelClass = `text-fs14 ${checkboxTextColor}`

  const toggleCheck = () => {
    setIsChecked(!isChecked)
  }

  const styles = {
    checkbox: { input: { cursor: "pointer" }, label: { cursor: "pointer" } },
  }

  return (
    <li className="py-2 px-8 max-w-[480px] flex justify-between items-center">
      <Checkbox
        label={<span className={checkboxLabelClass}>{name}</span>}
        color="cyan"
        radius="lg"
        styles={styles.checkbox}
        checked={isChecked}
        onChange={toggleCheck}
      />
      <button type="button" className="text-fs14 text-Tomato-09" onClick={onDelete}>
        削除
      </button>
    </li>
  )
}
