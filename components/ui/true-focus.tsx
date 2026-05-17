"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
    sentence?: string;
    blurAmount?: number;
    borderColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

interface FocusRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default function TrueFocus({
    sentence = "Precision Elegance Excellence",
    blurAmount = 4,
    borderColor = "#FFFFFF",
    animationDuration = 0.4,
    pauseBetweenAnimations = 1.2,
}: TrueFocusProps) {
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, (animationDuration + pauseBetweenAnimations) * 1000);
        return () => clearInterval(interval);
    }, [animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        if (!wordRefs.current[currentIndex] || !containerRef.current) return;
        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex]);

    return (
        <div className="relative flex gap-x-4 gap-y-2 justify-start items-center flex-wrap" ref={containerRef}>
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={index}
                        ref={(el) => { wordRefs.current[index] = el; }}
                        className="text-4xl md:text-7xl font-serif tracking-tight text-white transition-all select-none"
                        style={{
                            filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
                            opacity: isActive ? 1 : 0.3,
                            transition: `all ${animationDuration}s cubic-bezier(0.25, 1, 0.5, 1)`,
                        }}
                    >
                        {word}
                    </span>
                );
            })}

            <motion.div
                className="absolute pointer-events-none box-border"
                animate={{
                    x: focusRect.x - 6,
                    y: focusRect.y - 25,
                    width: focusRect.width + 12,
                    height: focusRect.height + 4,
                }}
                transition={{ duration: animationDuration, ease: [0.25, 1, 0.5, 1] }}
            >
                <span className="absolute w-3 h-3 border-[1.5px] top-0 left-0 border-r-0 border-b-0" style={{ borderColor }} />
                <span className="absolute w-3 h-3 border-[1.5px] top-0 right-0 border-l-0 border-b-0" style={{ borderColor }} />
                <span className="absolute w-3 h-3 border-[1.5px] bottom-0 left-0 border-r-0 border-t-0" style={{ borderColor }} />
                <span className="absolute w-3 h-3 border-[1.5px] bottom-0 right-0 border-l-0 border-t-0" style={{ borderColor }} />
            </motion.div>
        </div>
    );
}