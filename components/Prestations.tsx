import { Phone, MapPin, FileEdit } from "lucide-react";

export default function Prestations() {
  const prestations = [
    {
      icon: Phone,
      title: "Consultation téléphonique",
      description:
        "Échanges par téléphone pour répondre rapidement à vos questions juridiques, où que vous soyez.",
    },
    {
      icon: MapPin,
      title: "Consultation sur place",
      description:
        "Rendez-vous en personne à Orange (84100) ou déplacement à votre domicile si nécessaire.",
    },
    {
      icon: FileEdit,
      title: "Rédaction ou relecture de document",
      description:
        "Élaboration et vérification de vos documents juridiques pour garantir leur validité et leur précision.",
    },
  ];

  return (
    <section id="prestations" className="py-24 px-6 bg-[#faf5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Prestations</h2>
          <p className="text-xl text-gray-600">
            Des solutions adaptées à vos besoins, en toute flexibilité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prestations.map((prestation, index) => {
            const Icon = prestation.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{prestation.title}</h3>

                <p className="text-gray-600 leading-relaxed">{prestation.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
