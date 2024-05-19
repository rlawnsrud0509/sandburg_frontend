import { NEWS_TEXT } from "@/constants/landing";
import React from "react";

const LandingNews = () => {
  return (
    <div className="flex flex-col gap-10 p-40 box-border relative w-full h-[100vh] justify-center overflow-hidden">
      <span className="w-full mb-[5rem] font-['Pretendard'] text-7xl font-semibold">
        언론에 비친 샌드버그
      </span>
      {NEWS_TEXT.map((e, i) => (
        <a
          key={`newsText${i}`}
          href={e.url}
          className="text-black font-['Pretendard'] text-3xl rounded-lg p-12 shadow-[0_0_10px_#cccccc] cursor-pointer transition-all hover:scale-[1.005]"
          target="_blank"
        >
          {e.title}
        </a>
      ))}
    </div>
  );
};

export default LandingNews;
