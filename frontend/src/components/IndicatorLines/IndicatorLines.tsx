import React, { useCallback } from "react";
import "./IndicatorLines.css";

type Prop = {
  itemsCount: number;
  activeIndex: number;
  onAnimationEnd: () => void;
  changePage: (index: number) => void;
};

function IndicatorLines({
  itemsCount,
  activeIndex,
  onAnimationEnd,
  changePage,
}: Prop) {
  const isActive = useCallback((index) => index === activeIndex, [activeIndex]);

  return (
    <div className="indicator-container">
      {[...Array(itemsCount)]
        .map((_, index) => index)
        .map((currentIndex) => (
          <div
            className="indicator-item"
            key={currentIndex}
            onClick={() => changePage(currentIndex)}
          >
            <div
              className={[
                "indicator-mask",
                isActive(currentIndex) ? "indicator-mask-active" : "",
              ].join(" ")}
              onAnimationEnd={onAnimationEnd}
            />
          </div>
        ))}
    </div>
  );
}
export default IndicatorLines;
