"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from "framer-motion"; // 👈 Imported Transition

interface CircularTextProps {
    text: string;
    spinDuration?: number;
    onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
    className?: string;
}

const getRotationTransition = (duration: number, from: number) => ({
    from,
    to: from + 360,
    ease: "linear" as const,
    duration,
    type: "tween" as const,
    repeat: Infinity,
});

const getTransition = (duration: number, from: number) => ({
    rotate: getRotationTransition(duration, from),
    scale: { type: "spring" as const, damping: 20, stiffness: 300 },
});

export default function CircularText({
    text,
    spinDuration = 20,
    onHover = "speedUp",
    className = "",
}: CircularTextProps) {
    const letters = Array.from(text);
    const controls = useAnimation();
    const rotation: MotionValue<number> = useMotionValue(0);

    useEffect(() => {
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start),
        });
    }, [spinDuration, text, controls, rotation]);

    const handleHoverStart = () => {
        const start = rotation.get();
        let transitionConfig: Transition; // 👈 1. Added explicit Transition type here
        let scaleVal = 1;

        switch (onHover) {
            case "slowDown":
                transitionConfig = getTransition(spinDuration * 2, start);
                break;
            case "speedUp":
                transitionConfig = getTransition(spinDuration / 4, start);
                break;
            case "pause":
                transitionConfig = {
                    rotate: { type: "spring" as const, damping: 20, stiffness: 300 }, // 👈 2. Added 'as const'
                    scale: { type: "spring" as const, damping: 20, stiffness: 300 }, // 👈 3. Added 'as const'
                };
                break;
            case "goBonkers":
                transitionConfig = getTransition(spinDuration / 20, start);
                scaleVal = 0.8;
                break;
            default:
                transitionConfig = getTransition(spinDuration, start);
        }

        controls.start({ rotate: start + 360, scale: scaleVal, transition: transitionConfig });
    };

    const handleHoverEnd = () => {
        const start = rotation.get();
        controls.start({ rotate: start + 360, scale: 1, transition: getTransition(spinDuration, start) });
    };

    return (
        <motion.div
            className={`relative w-[160px] h-[160px] text-[10px] uppercase tracking-[0.2em] text-white flex items-center justify-center cursor-pointer ${className}`}
            style={{ rotate: rotation }}
            animate={controls}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            <div className="absolute w-2 h-2 bg-white rounded-full" />
            {letters.map((letter, i) => {
                const rotationDeg = (360 / letters.length) * i;
                return (
                    <span
                        key={i}
                        className="absolute origin-[0_80px]"
                        style={{
                            transform: `rotate(${rotationDeg}deg)`,
                            top: "0px",
                        }}
                    >
                        {letter}
                    </span>
                );
            })}
        </motion.div>
    );
}
