import ValueCard from "@/components/valueCard";

const LandingVision = () => {
  return (
    <div className="flex flex-col gap-[10%] items-center justify-center p-40 relative w-full h-[100vh]">
      <div className="flex flex-col items-center">
        <span className="font-['Pretendard'] font-semibold text-[6rem] text-black">
          온라인 사장님들이 마주하는 사업의 모든 문제를
        </span>
        <span className="font-['Pretendard'] font-semibold text-[6rem] text-black">
          <span className="text-blue-600">&quot; 데이터와 연결 &quot;</span> 로 해결하고자 합니다.
        </span>
      </div>
      <div className="w-full flex gap-16 justify-center">
        <ValueCard imgName="time" keyword="시간" />
        <ValueCard imgName="data" keyword="데이터" />
        <ValueCard imgName="underdog" keyword="언더독" />
        <ValueCard imgName="misfit" keyword="부적응자" />
      </div>
    </div>
  );
};

export default LandingVision;
