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
    }, 2000); // toggle every 400ms

    return () => clearInterval(interval);
  }, [firstFrame, secondFrame]);

  return currentMotion;
}

export default useTwoFrameMotion;
