"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ServiceBlock {
    id: string;
    title: string;
    tags: string[];
    description: string;
    image: string; // Dynamic path string for optimized local asset resolution
    details: string[];
}

const servicesList: ServiceBlock[] = [
    {
        id: "01",
        title: "Estate Preservation",
        tags: ["Meticulous Maintenance", "Fine Surface Cleaning", "Gallery Formulations"],
        description:
            "Comprehensive architectural sanitation engineered specifically for masterwork estates, premium minimalist interiors, and private art galleries. Every structural element is curated to maintain original material integrity.",
        image: "/images/clean1.jpeg",
        details: ["Material Friction Diagnostics", "Micro-Dust Eradication", "Anonymity Execution Compliance"],
    },
    {
        id: "02",
        title: "Corporate Curation",
        tags: ["Workspace Strategy", "Environmental Optimization", "Anonymity Protocols"],
        description:
            "Premium environmental refinement for high-stakes corporate settings, flagship luxury retail houses, and financial centers. Synchronized execution models operate seamlessly without institutional workflow disruption.",
        image: "/images/clean2.jpeg",
        details: ["Air-Purification Integration", "Zero-VOC Botanical Chemistry", "Multi-Zone Compliance Auditing"],
    },
    {
        id: "03",
        title: "Post-Structure Handover",
        tags: ["Construction Handover", "Deep Cleansing", "Architectural Polish"],
        description:
            "Meticulous post-build cleaning deployment following high-end completions or structural restoration initiatives. Completely eradicating heavy industrial particulate residues while preparing natural surfaces for immediate handoff.",
        image: "/images/clean3.jpeg",
        details: ["Particulate Industrial Extraction", "Deep Finish Sealing & Glossing", "Pre-Launch Aesthetic Tuning"],
    },
];

// Framer Motion Animation Variants
// Framer Motion Animation Variants
const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
};

const letterVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1] as const
        },
    },
};

const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
            delay: 0.4
        },
    },
};


export default function ServicesPage() {
    const [activeHoveredIndex, setActiveHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-[#FAF9F6] text-[#0A0A0C] font-sans py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden select-none">
            <div className="max-w-[1440px] mx-auto w-full">

                {/* UPPER DISPLAY HEADER BLOCK */}
                <div className="w-full border-b border-[#0A0A0C]/10 pb-10 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 p-2">
                        <div className="flex items-center gap-2 text-neutral-500 font-mono text-[10px] tracking-[0.3em] uppercase">
                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                            <span>SHEMA CAPABILITIES / CORE MATRIX</span>
                        </div>

                        {/* Split-Text Letter Animation Sequence */}
                        <motion.h2
                            variants={titleContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl tracking-tighter uppercase text-[#0A0A0C] flex flex-wrap p-2"
                        >
                            {"SERVICES".split("").map((letter, index) => (
                                <span key={index} className="overflow-hidden inline-block relative pr-[1px]">
                                    <motion.span variants={letterVariants} className="inline-block origin-bottom">
                                        {letter}
                                    </motion.span>
                                </span>
                            ))}
                        </motion.h2>
                    </div>

                    <motion.p
                        variants={descriptionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-xs md:text-[13px] text-neutral-600 font-light max-w-xs leading-relaxed md:text-right"
                    >
                        Meticulous property preservation and technical sanitation architectures custom tailored for premium physical assets.
                    </motion.p>
                </div>

                {/* CORE INTERACTIVE LIST TRACK */}
                <div className="flex flex-col w-full border-t border-[#0A0A0C]/10">
                    {servicesList.map((service, index) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setActiveHoveredIndex(index)}
                            onMouseLeave={() => setActiveHoveredIndex(null)}
                            className="relative w-full border-b border-[#0A0A0C]/10 py-8 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-y-6 items-start transition-all duration-300 group cursor-pointer"
                        >
                            {/* Asymmetrical background highlight frame layer */}
                            <div className="absolute inset-0 bg-[#0A0A0C]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Index Identifier Row */}
                            <div className="md:col-span-1 flex items-center">
                                <span className="text-xs font-mono text-neutral-400 font-medium group-hover:text-[#0A0A0C] transition-colors duration-300">
                                    {service.id} —
                                </span>
                            </div>

                            {/* Primary Typographic Header Stack */}
                            <div className="md:col-span-4 space-y-2 pr-4">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#0A0A0C] group-hover:translate-x-1.5 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                                    {service.title}
                                </h3>
                                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[9px] font-mono tracking-wider text-neutral-400 uppercase">
                                    {service.tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-orange-600/80 font-medium">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Secondary Structural Narrative Content Box */}
                            <div className="md:col-span-4 pr-6">
                                <p className="text-xs sm:text-[13px] font-light leading-relaxed text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">
                                    {service.description}
                                </p>

                                {/* Collapsible Meta Data List Element */}
                                <div className="mt-4 pt-4 border-t border-[#0A0A0C]/5 hidden group-hover:block transition-all duration-500">
                                    <div className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase mb-2">/ INTERNAL PROTOCOLS</div>
                                    <div className="space-y-1">
                                        {service.details.map((detail, idx) => (
                                            <div key={idx} className="text-[10px] font-mono text-neutral-500 flex items-center gap-1.5">
                                                <span className="w-1 h-1 bg-neutral-300 rounded-full" /> {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Image Mask Accent Area */}
                            <div className="md:col-span-2 relative h-24 md:h-28 w-full md:w-auto rounded-none overflow-hidden bg-neutral-100 border border-[#0A0A0C]/5">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-w-768px) 100vw, 200px"
                                    priority={index === 0}
                                    className="object-cover absolute inset-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-[#FAF9F6]/5 backdrop-blur-[0.5px] mix-blend-multiply" />

                                {/* Visual grid wireframes over image */}
                                <div className="absolute inset-0 grid grid-cols-3 opacity-20 pointer-events-none">
                                    <div className="border-r border-white/30 h-full" />
                                    <div className="border-r border-white/30 h-full" />
                                </div>
                            </div>

                            {/* Global Structural Trigger Arrow Anchor */}
                            <div className="md:col-span-1 flex md:justify-end items-center self-center md:self-start pt-2 md:pt-0">
                                <div className="w-9 h-9 rounded-full border border-[#0A0A0C]/10 bg-[#FAF9F6] flex items-center justify-center text-neutral-400 group-hover:text-[#0A0A0C] group-hover:border-[#0A0A0C]/30 group-hover:rotate-45 transition-all duration-500 ease-[0.16,1,0.3,1] shadow-sm">
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}