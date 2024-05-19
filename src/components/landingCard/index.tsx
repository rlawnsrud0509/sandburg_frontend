import Image from "next/image";

const LandingCard = () => {
  return (
    <div className="flex flex-col p-40 relative w-full h-[100vh] overflow-hidden">
      <span className="font-['Pretendard'] font-semibold text-[6rem] z-10 text-white">
        커머스와 핀테크를 잇는 데이터 전문기업,
      </span>
      <span className="font-['Pretendard'] font-semibold text-[6rem] z-10 text-white">
        <span className="text-blue-600">샌드버그</span> 입니다.
      </span>
      <Image src="/base/landing.webp" alt="contain" layout="fill" objectFit="cover" />
    </div>
  );
};

export default LandingCard;
