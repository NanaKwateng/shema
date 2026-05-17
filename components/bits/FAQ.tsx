"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    const faqItems = [
        {
            q: "What areas and locations does Shema Cleaning Agency service?",
            a: "We provide comprehensive commercial, office, and luxury residential cleaning services across the entire metropolitan area and surrounding corporate business corridors. For major commercial or post-construction contracts, we are equipped to deploy teams to regional locations outside our standard boundary."
        },
        {
            q: "Do you supply your own cleaning equipment and products?",
            a: "Yes, our elite teams arrive fully equipped with advanced commercial-grade tools, including HEPA-filter vacuums and micro-fiber technologies. We utilize premium, non-toxic eco-friendly sanitization solutions that protect your staff, family, and delicate surface assets like natural stone or high-end wood."
        },
        {
            q: "Can we schedule cleanings outside of standard business hours?",
            a: "Absolutely. We specialize in non-disruptive operations. Most corporate office and commercial cleaning contracts are scheduled overnight, early morning, or during weekends to ensure zero interference with your team's workflow and business operations."
        },
        {
            q: "Are your cleaning specialists background-checked and insured?",
            a: "Yes, without exception. To guarantee absolute security and peace of mind for our residential, office, and industrial clients, every team member undergoes strict background screening, thorough safety vetting, and comprehensive training. Shema Cleaning Agency is fully bonded and insured."
        }
    ];

    return (
        <section className="py-32 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-mono uppercase tracking-tight mb-16 text-white">Frequently Asked Questions</h2>


            <Accordion type="single" collapsible className="w-full space-y-2">
                {faqItems.map((item, idx) => (
                    <AccordionItem
                        key={idx}
                        value={`item-${idx}`}
                        className="border-b border-white/10"
                    >
                        <AccordionTrigger className="py-4 text-left md:text-sm text-neutral-200 hover:text-white hover:no-underline uppercase tracking-wide transition-colors">
                            {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-400 font-sans font-light text-sm leading-relaxed pb-6 pt-2">
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
