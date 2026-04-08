import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CounterProps {
  value: string;
  direction?: "up" | "down";
}

export const Counter = ({ value, direction = "up" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract numeric part and suffix (e.g., "1,200+" -> 1200 and "+")
  const numericValue = parseInt(value.replace(/,/g, "").match(/\d+/)?.[0] || "0");
  const suffix = value.replace(/[0-9,]/g, "");

  const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [motionValue, isInView, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
        ref.current.textContent = formatted + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{direction === "down" ? value : `0${suffix}`}</span>;
};
