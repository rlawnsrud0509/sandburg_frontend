import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-40 box-border flex flex-col gap-40">
      <span className="font-['Pretendard'] text-7xl font-semibold">Contact Us</span>
      <div className="flex flex-col gap-8">
        <span className="font-['Pretendard'] text-3xl">
          채용 문의 | recruit@sandburg.co.kr (051-711-4488)
        </span>
        <span className="font-['Pretendard'] text-3xl">
          사업 및 제휴 문의 | contact@sandburg.co.kr (010-2413-4498)
        </span>
      </div>
      <span className="font-['Pretendard'] text-3xl">2024 ⓒ Sandburg Inc.</span>
    </div>
  );
};

export default Footer;
