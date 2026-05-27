import Link from "next/link";
import { Compare } from "../ui/compare";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";


export default function CompareGroup() {
    return (
        <section className="py-32 bg-white border-y border-white/5 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="flex-1 lg:col-span-3 space-y-6">

                    <h2 className="text-3xl md:text-4xl text-black font-mono tracking-tight uppercase">Pristine Architecture</h2>
                    <p className="text-neutral-700 font-light text-base leading-relaxed">
                        Slide across the frame to witness the Shema transformation. Compare our flawless post-construction and maintenance results across modern, high-end interior surfaces and architectural exterior designs.
                    </p>

                    <Link href={"/contact"}>
                        <Button size={"lg"} className="rounded-3xl">Contact us <ArrowUpRight size={24} className="ml-2"></ArrowUpRight> </Button>
                    </Link>
                </div>

                <div className="flex-4 lg:col-span-9 flex justify-center">
                    <Compare
                        firstImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
                        secondImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                        className="w-full h-100 md:h-125"
                    />
                </div>
            </div>
        </section>
    )
}