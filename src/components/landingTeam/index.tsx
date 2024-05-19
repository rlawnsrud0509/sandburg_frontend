import React from "react";
import Team from "../team";

const LandingTeam = () => {
  return (
    <div className="flex flex-col gap-10 p-40 box-border relative w-full h-fit items-center overflow-hidden">
      <span className="font-['Pretendard'] font-semibold text-8xl z-10">
        <span className="text-blue-600">데이터</span>와 <span className="text-blue-600">IT</span>로
        세상을 바꿀 열정을 가진 여러분을 모시고 싶습니다!
        <div className="grid grid-rows-3 justify-start w-full mt-48 gap-24">
          <Team category="G&A (General & Administartion) Team" title={["Untitled"]} />
          <Team
            category="R&D (Research & Development) Team"
            title={[
              "Backend Engineer (1년 이상)",
              "Frontend Engineer (1년 이상)",
              "Backend Engineer (5년 이상)",
            ]}
          />
          <Team category="S&M (Sales & Marketing) Team" title={["Untitled"]} />
        </div>
      </span>
    </div>
  );
};

export default LandingTeam;
