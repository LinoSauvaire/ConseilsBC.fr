import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="a-propos" className="py-24 px-6 bg-[#faf5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">À propos</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Je m'appelle <strong>Blandine Cotelle</strong>, fondatrice de Conseils BC.
              </p>

              <p>
                Juriste généraliste passionnée par le droit et l'accompagnement des personnes,
                j'ai obtenu une Licence de Droit.
              </p>

              <p>
                J'ai choisi de créer Conseils BC pour offrir un service de proximité, humain
                et clair à ceux qui ont besoin d'un conseil juridique fiable.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mes valeurs</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Écoute</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Transparence</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Efficacité</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Poignée de main professionnelle"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
