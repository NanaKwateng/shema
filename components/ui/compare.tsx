"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CompareProps {
    firstImage: string;
    secondImage: string;
    className?: string;
    slideMode?: "hover" | "drag";
}

export function Compare({ firstImage, secondImage, className = "", slideMode = "hover" }: CompareProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let position = (x / rect.width) * 100;
        if (position < 0) position = 0;
        if (position > 100) position = 100;
        setSliderPosition(position);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (slideMode !== "hover") return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches[0]) handleMove(e.touches[0].clientX);
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden select-none rounded-full border border-white/10 ${className}`}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            <div className="absolute inset-0 w-full h-full">
                <Image src={secondImage} alt="Transformed Clean  Interior" fill className="object-cover" priority />
            </div>

            <motion.div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <Image src={firstImage} alt="Unrestored Before State" fill className="object-cover" priority />
            </motion.div>

            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-obsidian border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <span className="text-[10px] text-white/80 font-mono">↔</span>
                </div>
            </div>
        </div>
    );
}