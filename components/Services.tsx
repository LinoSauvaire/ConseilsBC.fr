import { Phone, FileText, Users, Scale } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Phone,
      title: "Consultation juridique",
      description:
        "Consultations par téléphone ou sur place pour répondre à vos questions juridiques et vous orienter dans vos démarches.",
    },
    {
      icon: FileText,
      title: "Rédaction de documents",
      description:
        "Rédaction et relecture de documents juridiques pour garantir leur conformité et leur efficacité.",
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description:
        "Accompagnement dans vos démarches administratives ou contentieuses avec une approche humaine et sur-mesure.",
    },
    {
      icon: Scale,
      title: "Orientation juridique",
      description:
        "Orientation vers un avocat si nécessaire pour les situations nécessitant une représentation en justice.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Je vous apporte une analyse claire et adaptée à votre situation, que vous soyez un
            particulier ou un professionnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#faf5f0] p-8 rounded-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
