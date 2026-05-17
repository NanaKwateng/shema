"use client"
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";


export default function ServiceOverview() {


    const [activeService, setActiveService] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const services = [
        {
            title: "Elite Home & Residential Care", // 📸 Matches Image 1 & 2 (Premium Home Interiors)
            desc: "Complete interior detailing and preservation tailored for modern luxury residences, premium fabrics, and high-end architectural materials.",
            bg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Post-Construction & Commercial Operations", // 🛠️ Focuses on full-scale commercial transitions
            desc: "High-capacity precision cleanup, debris mitigation, and thorough structural resets for newly designed spaces and commercial storefronts.",
            bg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Corporate Office & Workplace Sanitization", // 📸 Matches Image 3 (Sleek Corporate Corridors)
            desc: "Executive maintenance routines for office layouts, tech hubs, and common spaces planned to protect corporate assets with zero workflow disruption.",
            bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
        }
    ];



    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-16">Special Servies We Offer</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 space-y-4">
                    {services.map((svc, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveService(idx)}
                            className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${activeService === idx ? "bg-onyx border-white/20" : "border-transparent opacity-40 hover:opacity-70"}`}
                        >
                            <span className="font-mono text-xs text-neutral-500 block mb-2">0{idx + 1}.</span>
                            <h3 className="text-xl font-serif mb-2">{svc.title}</h3>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">{svc.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-7 relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img
                        src={services[activeService].bg}
                        alt="Luxury Space Preview"
                        className="w-full h-full object-cover object-center transition-transform duration-1000 scale-100 group-hover:scale-105 mix-blend-luminosity"
                    />
                </div>

                <Link href="/services">
                    <Button size={"lg"} className="rounded-3xl">Our Services <ArrowUpRight size={24} className="mi-2" /></Button></Link>
            </div>
        </section>
    )
}