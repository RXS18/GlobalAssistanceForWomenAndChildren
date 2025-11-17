import { Heart, Shield, Users, Handshake, Megaphone } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach our work with empathy and understanding, recognizing the unique challenges faced by each individual.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We are committed to transparency, accountability, and ethical practices in all our operations.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We believe in fostering self-reliance and giving voice to the voiceless, enabling them to shape their own futures.',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We work hand-in-hand with local communities, partners, and stakeholders to maximize our impact.',
    },
    {
      icon: Megaphone,
      title: 'Advocacy',
      description: 'We champion the rights of women and children, striving for systemic change and justice.',
    },
  ];

  return (
    <div className="flex-1">
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl leading-relaxed">
            Empowering vulnerable women and children globally through comprehensive assistance and sustainable solutions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">ABOUT US</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Global Assistance For Women And Children (GAW&C) is a non-governmental organization (NGO) committed to improving the lives of vulnerable women and children worldwide. Established in 2018, our mission is to provide holistic support to those affected by abuse, marginalization, poverty, and conflict.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in empowering individuals and communities by creating opportunities for growth and self-sufficiency. Our initiatives are designed to address the multifaceted challenges faced by women and children, offering care, protection, and pathways to a better future.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">OUR HISTORY</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 2018, GAW&C emerged from a shared vision to address the profound needs of women and children in crisis. Recognizing that collective action yields greater impact, our founders united with the goal of fostering transformative change. Since then, we have grown into a dedicated team working tirelessly to uphold the rights and dignity of those we serve.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">OUR MISSION</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To empower vulnerable women and children globally by providing comprehensive assistance, promoting human rights, and advocating for sustainable solutions that address the root causes of their suffering.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">OUR VISION</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A world where all women and children live free from violence, poverty, and discrimination, with access to quality education, healthcare, and opportunities to thrive. Through improved access to care and emotional support, vulnerable women and children begin to rebuild their lives, finding opportunities to grow mentally, physically, socially and spiritually.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">OUR VALUES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Icon className="text-emerald-600" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
