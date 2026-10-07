import { useEffect, useState } from "react";

export function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min((t - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration]);

  return value;
}
