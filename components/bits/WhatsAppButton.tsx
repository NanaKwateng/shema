"use client";

import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";

export default function WhatsAppButton() {
    const phone = "07346459922"; // your phone number
    const message = encodeURIComponent(
        "Hi, I would like to offer you a service"
    );

    const link = `https://wa.me/${phone}?text=${message}`;

    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="text-white px-4 py-2 flex items-center gap-2 transition"
        >
            <MdWhatsapp size={24} /> WhatsApp Chat
        </Link>
    );
}