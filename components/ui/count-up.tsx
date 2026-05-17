"use client";

import { useInView, useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, useRef } from "react";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    suffix?: string;
}

export default function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2,
    className = "",
    startWhen = true,
    separator = ",",
    suffix = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);
    const springValue = useSpring(motionValue, {
        damping: 20 + 40 * (1 / duration),
        stiffness: 100 * (1 / duration),
    });

    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const formatValue = useCallback(
        (latest: number) => {
            const formatted = Intl.NumberFormat("en-US", {
                useGrouping: !!separator,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(latest);
            return separator ? `${formatted.replace(/,/g, separator)}${suffix}` : `${formatted}${suffix}`;
        },
        [separator, suffix]
    );

    useEffect(() => {
        if (isInView && startWhen) {
            const timeoutId = setTimeout(() => {
                motionValue.set(direction === "down" ? from : to);
            }, delay * 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = formatValue(latest);
            }
        });
    }, [springValue, formatValue]);

    return <span className={className} ref={ref}>{formatValue(direction === "down" ? to : from)}</span>;
}