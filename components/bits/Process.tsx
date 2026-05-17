export default function Process() {
    return (
        <section className="py-32 bg-black/60 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-mono uppercase tracking-tight mb-20 text-white">Why Choose Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Step 1 */}
                    <div className="space-y-4">
                        <span className="text-5xl font-mono text-white/10 block font-light">01</span>
                        <h5 className="font-mono text-lg text-white uppercase tracking-wide">Custom Site Audit</h5>
                        <p className="text-neutral-400 text-xs font-light leading-relaxed">We analyze your facility's layout, foot traffic patterns, and surface materials to craft a highly specific, tailored cleaning strategy for your home or business.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-4">
                        <span className="text-5xl font-mono text-white/10 block font-light">02</span>
                        <h5 className="font-mono text-lg text-white uppercase tracking-wide">Seamless Staging</h5>
                        <p className="text-neutral-400 text-xs font-light leading-relaxed">Our elite team arrives promptly during your preferred, pre-approved hours, setting up stealthy, non-disruptive workflows to preserve your team's or family's productivity.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-4">
                        <span className="text-5xl font-mono text-white/10 block font-light">03</span>
                        <h5 className="font-mono text-lg text-white uppercase tracking-wide">Advanced Sanitation</h5>
                        <p className="text-neutral-400 text-xs font-light leading-relaxed">We deploy hospital-grade HEPA filtration vacuums, advanced sanitization formulas, and meticulous micro-fiber techniques to strip away unseen bacteria and pollutants.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="space-y-4">
                        <span className="text-5xl font-mono text-white/10 block font-light">04</span>
                        <h5 className="font-mono text-lg text-white uppercase tracking-wide">White-Glove Audit</h5>
                        <p className="text-neutral-400 text-xs font-light leading-relaxed">Every zone undergoes an exhaustive post-clean inspection, ensuring pristine visual presentation and a deeply healthy atmosphere that matches Shema's elite standards.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
