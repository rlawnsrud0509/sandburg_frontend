import { LANDING_VALUECARD_TEXT } from "@/constants/landing";
import { ValueCardProperties } from "@/types/components/ValueCardProperties.type";
import Image from "next/image";

const ValueCard = ({ imgName, keyword }: ValueCardProperties) => {
  return (
    <div className="flex w-[25rem] h-[35rem] relative transition-all hover:scale-110">
      <Image
        src={`/base/${imgName}.webp`}
        alt="valuecardimg"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="flex flex-col w-full h-full gap-4 p-8 box-border z-10 opacity-0 transition-all hover:opacity-100">
        <span className="w-full font-['Pretendard'] text-3xl text-white">
          우리는 <span className="text-blue-400">{keyword}</span>
          입니다
        </span>
        <span className="w-full font-['Pretendard'] text-2xl leading-9 text-white text-">
          {LANDING_VALUECARD_TEXT[keyword]}
        </span>
      </div>
    </div>
  );
};

export default ValueCard;
