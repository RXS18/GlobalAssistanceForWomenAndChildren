import { Heart, Stethoscope, Baby, Brain } from 'lucide-react';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const services = [
    {
      icon: Heart,
      title: 'Gyneco-obstetrics',
      description: 'Providing essential maternal health services, safe delivery, and postnatal care to reduce maternal and infant mortality.',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Ensuring access to vital healthcare for children, including vaccinations, nutrition, and treatment for common childhood illnesses.',
    },
    {
      icon: Brain,
      title: 'Psychiatry/Psychological Support',
      description: 'Offering mental health services and trauma counseling to individuals affected by sexual violence, conflict, and other atrocities.',
    },
  ];

  return (
    <div className="flex-1">
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl leading-relaxed">
            Transforming lives through targeted interventions and sustainable community support.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">OUR PROJECTS</h2>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
              <h3 className="text-3xl font-bold text-white">DRC PROJECT</h3>
              <p className="text-emerald-50 mt-2">Democratic Republic of Congo</p>
            </div>

            <div className="p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our flagship project is dedicated to supporting vulnerable women and children in the Democratic Republic of Congo (DRC). Following a comprehensive health assessment in the region, Global Assistance for Women and Children (GAW&C) developed a targeted intervention strategy.
              </p>

              <h4 className="text-2xl font-bold mb-6 text-gray-900">Critical Areas of Focus</h4>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Icon className="text-emerald-600" size={28} />
                        </div>
                      </div>
                      <h5 className="text-lg font-bold text-center mb-3 text-gray-900">{service.title}</h5>
                      <p className="text-gray-700 text-center leading-relaxed">{service.description}</p>
                    </div>
                  );
                })}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This project aims to rebuild lives by addressing both immediate health needs and long-term psychological well-being, fostering a path towards recovery and resilience in communities devastated by conflict.
              </p>

              <div className="text-center">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Support This Project
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 md:p-12 text-center">
            <Stethoscope className="mx-auto text-emerald-600 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Other Projects</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We are constantly working to expand our reach and impact. Stay tuned for information on new projects and initiatives!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
