import CountUp from "../ui/count-up";



export default function CounterBits() {
    return (
        <section className="py-24 bg-obsidian px-6 text-center border-y border-white/5">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                    <CountUp to={700} suffix="+" duration={2.5} className="text-3xl md:text-5xl font-serif tracking-tight block" />
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Spaces Sanitized</span>
                </div>
                <div className="space-y-2">
                    <CountUp to={100} suffix="%" duration={2} className="text-3xl md:text-5xl font-serif tracking-tight block" />
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Client Satisfaction</span>
                </div>
                <div className="space-y-2">
                    <CountUp to={12} suffix="0+" duration={3} className="text-3xl md:text-5xl font-serif tracking-tight block" />
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Sq. Ft. Cleaned</span>
                </div>
                <div className="space-y-2">
                    <CountUp to={5} suffix="+" duration={1.5} className="text-3xl md:text-5xl font-serif tracking-tight block" />
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Years Experience</span>
                </div>
            </div>
        </section>
    )
}
