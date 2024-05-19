"use client";

import { ReactNode } from "react";
import { useScroll } from "@/hooks/useScroll";
import classNames from "classnames";

const ScrollAnimationContainer = ({ children }: { children: ReactNode }) => {
  const { ref, isInViewport } = useScroll();

  return (
    <div
      ref={ref}
      className={classNames(
        "w-full h-full",
        isInViewport ? "animate-scrollShow overflow-hidden" : "animate-scrollHide overflow-hidden"
      )}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationContainer;
