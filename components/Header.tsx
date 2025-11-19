"use client";

import { Scale } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("accueil")}
            className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
          >
            <Scale className="w-6 h-6" />
            CONSEILS BC
          </button>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("prestations")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Prestations
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
