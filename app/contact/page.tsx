import { Metadata } from "next";
import { GlobeDemo } from "@/components/bits/Globe";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Book Commercial & Residential Services | Shema Cleaning Agency Contact",
    description: "Connect with the Shema Cleaning Agency service intake team to arrange commercial office, retail, or premium residential deep cleaning.",
};

export default function ContactPage() {
    // 📞 REPLACE THIS placeholder with your actual business phone number (include country code, no spaces or dashes)
    const businessPhoneNumber = "07346459922";

    // ✉️ REPLACE THIS ID with your free Formspree target endpoint ID token from formspree.io
    const formspreeEndpointId = "xoqgzzpy";

    return (
        <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Form & Direct Communication Links (7 Columns) */}
            <div className="lg:col-span-7 space-y-12">
                <header className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-mono uppercase tracking-tight text-white">Book Shema Services</h1>
                </header>

                {/* Real Working Action Form Link Handler */}
                <form
                    action={`https://formspree.io{formspreeEndpointId}`}
                    method="POST"
                    className="space-y-6 font-mono text-[10px] uppercase tracking-wider"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-neutral-400 block">Client / Company Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full bg-neutral-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white text-white font-sans normal-case text-sm"
                                placeholder="Your Name or Company"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-neutral-400 block">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-neutral-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white text-white font-sans normal-case text-sm"
                                placeholder="client@domain.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-neutral-400 block">Service Type & Property Details</label>
                        <textarea
                            name="message"
                            rows={5}
                            className="w-full bg-neutral-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white text-white font-sans normal-case text-sm resize-none"
                            placeholder="Please detail your space (Office, Commercial, or Home), approximate square footage, and desired timing window..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-white text-black font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors font-bold cursor-pointer"
                    >
                        Submit Request
                    </button>
                </form>

                {/* Direct Connect Quick Links Grid Block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {/* Direct WhatsApp Callout Action Link */}
                    <Link
                        href={`https://wa.me07346459922, '')}?text=Hello%20Shema%20Cleaning%20Agency,%20I%20would%20like%20to%20inquire%20about%20your%20cleaning%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 border border-white/10 rounded-xl p-4 bg-neutral-900/40 text-neutral-300 font-mono text-[10px] uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all group"
                    >
                        <FaWhatsapp className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                        Chat on WhatsApp
                    </Link>

                    {/* Direct Telephone Dialer Link */}
                    <Link
                        href={`tel:${businessPhoneNumber}`}
                        className="flex items-center justify-center gap-3 border border-white/10 rounded-xl p-4 bg-neutral-900/40 text-neutral-300 font-mono text-[10px] uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all group"
                    >
                        <FaPhone className="w-3.5 h-3.5 text-neutral-400 group-hover:scale-110 transition-transform" />
                        Call Agency Direct
                    </Link>
                </div>
            </div>

            {/* Right Column: MagicUI Globe Container Display (5 Columns) */}
            <div className="lg:col-span-5 h-[350px] lg:h-[500px] w-full flex items-center justify-center backdrop-blur-sm p-4 lg:mt-14">
                <GlobeDemo />
            </div>

        </main>
    );
}
