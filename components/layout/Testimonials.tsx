export default function Testimonials() {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl uppercase tracking-tight mb-20 text-white">Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Testimonial 1: Commercial/Office Focus */}
                <blockquote className="border-l-2 border-white/20 pl-8 space-y-4">
                    <p className="text-md font-mono italic text-neutral-200 leading-relaxed normal-case">
                        &ldquo;Shema Cleaning Agency manages our entire corporate office complex with complete professionalism. Their team works around our active office hours seamlessly, keeping our workspaces flawlessly pristine.&rdquo;
                    </p>
                    {/* <cite className="font-mono text-xs text-neutral-400 block not-italic">— Operations Director, Tech Hub Facility</cite> */}
                </blockquote>

                {/* Testimonial 2: Luxury Residential Focus */}
                <blockquote className="border-l-2 border-white/20 pl-8 space-y-4">
                    <p className="text-md font-mono italic text-neutral-200 leading-relaxed normal-case">
                        &ldquo;Exceptional attention to detail across our properties. From deep home cleans to commercial storefront care, Shema consistently brings a white-glove standard that is hard to find.&rdquo;
                    </p>
                    {/* <cite className="font-mono text-xs text-neutral-400 block not-italic">— Principal Property Manager, Luxury Estates</cite> */}
                </blockquote>
            </div>
        </section>
    );
}
