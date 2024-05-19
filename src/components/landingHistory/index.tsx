import React from "react";
import History from "../history";
import { HISTORY_TEXT } from "@/constants/landing";

const LandingHistory = () => {
  return (
    <div className="flex flex-col gap-[5%] items-center justify-center p-40 relative w-full h-fit bg-gray-800  before:content-[''] before:w-2 before:h-[81%] before:bg-white before:absolute before:top-[14%]">
      <span className="w-full flex justify-center font-['Pretendard'] text-8xl text-white mb-[8%]">
        <span className="text-blue-400">샌드버그가</span>&nbsp;지나온 길
      </span>
      {HISTORY_TEXT.map((e, i) => {
        return <History key={`historyText${i}`} {...e} />;
      })}
    </div>
  );
};

export default LandingHistory;
