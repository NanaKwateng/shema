import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                {/* Brand Column */}
                <div className="space-y-3">
                    <h3 className="font-mono tracking-[0.3em] uppercase text-xl font-light text-white">SHEMA</h3>
                    <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                        Professional Commercial & Residential Cleaning
                    </p>
                </div>

                {/* Navigation Links Column */}
                <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                    <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>

            {/* Copyright & Footnotes Column */}
            <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 font-mono text-[10px]">
                <span>&copy; {new Date().getFullYear()} SHEMA CLEANING AGENCY. ALL RIGHTS RESERVED.</span>
                <span className="tracking-widest">PRISTINE SPACE STANDARDS</span>
            </div>
        </footer>
    );
}
