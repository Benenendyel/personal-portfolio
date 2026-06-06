import { useEffect } from "react";

function useTwoFrameMotion({
  firstFrame,
  secondFrame,
  currentMotion,
  setCurrentMotion,
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMotion((prev) =>
        prev === firstFrame ? secondFrame : firstFrame,
      );
    }, 400);

    return () => clearInterval(interval);
  }, [firstFrame, secondFrame]);

  return currentMotion;
}

export default useTwoFrameMotion;
