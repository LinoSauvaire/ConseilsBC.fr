"use client";

import { CheckCircle2, Phone, Users } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{ background: "linear-gradient(135deg, #f0d9d1 0%, #e8c4b8 100%)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6 text-gray-700">
          <CheckCircle2 className="w-5 h-5" />
          <p className="text-sm tracking-wide uppercase">
            Juriste diplômée • Conseil personnalisé
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Bienvenue sur Conseils BC
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Votre partenaire juridique de confiance. Juriste diplômée d'une licence de droit, je vous
          accompagne dans vos démarches juridiques avec clarté, rigueur et bienveillance.
        </p>

        <div className="flex items-center justify-center gap-8 mb-12 text-gray-700">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>Consultations par téléphone ou en présentiel</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Conseils pour particuliers et professionnels</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
          >
            PRENDRE RENDEZ-VOUS
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 text-base font-medium"
          >
            DÉCOUVRIR MES SERVICES
          </button>
        </div>
      </div>
    </section>
  );
}
