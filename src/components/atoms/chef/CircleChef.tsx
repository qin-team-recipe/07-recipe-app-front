import Image from "next/image";

interface CircleChefProps {
  icon: string;
  name: string;
}

export const CircleChef = (props: CircleChefProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[68px] h-[68px] rounded-full bg-gray-100 ">
        <Image src={props.icon} alt="Chef" width={68} height={68} className="rounded-full" />
      </div>
      <p className="text-[12px] mt-1 items-center">{props.name}</p>
    </div>
  );
}
