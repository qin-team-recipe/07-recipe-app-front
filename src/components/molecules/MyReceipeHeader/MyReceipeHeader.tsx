interface MyReceipeHeaderProps {
  close: () => void;
  draft: () => void;
  create: () => void;
}

/**
 * マイレシピ作成時ヘッダー
 * 
 */
export const MyReceipeHeader = ({ close, draft, create }: MyReceipeHeaderProps) => {
  return (
    <div className="flex justify-between items-center bg-[#F9F8F9] py-[12px] px-[16px]  border-0 border-b border-solid border-[#E4E2E4]">
      <div className="text-[24px] cursor-pointer" onClick={close}>
        ×
      </div>
      <div className="flex items-center">
        <p className="text-[16px]  text-[#020010] font-bold font-sans opacity-60 mx-[8px] my-0 cursor-pointer" onClick={draft}>下書き</p>
        <p className="text-[16px]  text-[#E54D2E] font-bold font-sans mx-[8px] my-0 cursor-pointer" onClick={create}>作成する</p>
      </div>
    </div>
  );
}