import Image from "next/image";

import { TextButton } from "@/components/atoms/TextButton/TextButton";

interface MyReceipeHeaderProps {
  close: () => void;
  draft: () => void;
  create: () => void;
  isEdited: boolean
}

/**
 * マイレシピ作成時ヘッダー
 */
export const MyReceipeHeader = ({ close, draft, create, isEdited }: MyReceipeHeaderProps) => {
  return (
    <div className="flex justify-between items-center bg-Mauve-01 py-[12px] px-[16px] max-w-[480px]">
      <Image src="/assets/closeButton.svg" className="cursor-pointer" width={24} height={24} alt="closeButton" onClick={close} />
      <div className="flex items-center">
        <TextButton innerText="下書き" primary={false} onClick={draft} diabled={isEdited} />
        <TextButton innerText="作成" primary={true} onClick={create} />
      </div>
    </div>
  );
}