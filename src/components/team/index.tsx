import { TeamProperties } from "@/types/components/TeamProperties.type";
import Image from "next/image";

const Team = ({ category, title }: TeamProperties) => {
  return (
    <div className="flex flex-col gap-8">
      <span className="font-['Pretendard'] font-semibold text-4xl z-10">{category}</span>
      <div className="flex gap-8">
        {title.map((e, i) => {
          return (
            <div
              key={`teamText${i}`}
              className="flex flex-col gap-8 p-8 shadow-lg rounded-md cursor-pointer transition-all hover:scale-[1.02]"
            >
              <div className="relative w-[20rem] h-[15rem]">
                <Image
                  src="/base/position.webp"
                  alt="position"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <span className="text-3xl text-gray-800 whitespace-normal break-words w-[20rem] flex">
                {e}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
