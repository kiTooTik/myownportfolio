"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  direction = "left",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  direction?: "left" | "right";
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const spans = scope.current?.querySelectorAll("span");

    if (!spans) return;

    // Convert NodeList to Array and reverse order if direction is "right"
    const spansArray = Array.from(spans);
    const orderedSpans = direction === "right" ? spansArray.reverse() : spansArray;

    animate(
      orderedSpans,
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter, direction, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className=" transition-all duration-700 teko capitalize text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[12rem] text-gray-200 "
            style={{
              filter: filter ? "blur(20px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl">{renderWords()}</div>
      </div>
    </div>
  );
};
