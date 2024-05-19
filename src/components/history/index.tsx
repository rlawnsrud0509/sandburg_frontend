import { HistoryPorperties } from "@/types/components/HistoryProperties.type";
import classNames from "classnames";
import React from "react";
import ScrollAnimationContainer from "../common/scrollAnimationContainer";

const History = ({ direction, date, dialog }: HistoryPorperties) => {
  return (
    <ScrollAnimationContainer>
      <div
        className={classNames(
          "w-full pt-4 pb-4 font-['Pretendard'] flex text-white",
          direction === "right" ? "justify-end" : "justify-start"
        )}
      >
        <div
          className={classNames(
            "w-[50%] flex flex-col gap-6 pl-24 pr-24",
            direction === "right" ? "items-start" : "items-end"
          )}
        >
          <div className="text-7xl">{date}</div>
          <div className="text-4xl">{dialog}</div>
        </div>
      </div>
    </ScrollAnimationContainer>
  );
};

export default History;
