"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="py-40 bg-gradient-to-t from-black to-onyx border-t border-white/5 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <h2 className="text-4xl md:text-6xl font-mono uppercase tracking-tight text-white">
                    Ready for spotless excellence?
                </h2>
                <p className="text-neutral-400 font-sans font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    Contact Shema Cleaning Services today. Let our professional team design a tailored maintenance routine built around your corporate office, retail environment, or residential property.
                </p>

                <div>
                    <Link href="/contact" passHref>
                        <Button className="px-10 py-5 bg-white text-black hover:bg-neutral-200 font-mono text-xs uppercase tracking-widest rounded-full transition-all shadow-xl h-auto">
                            Book a Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
