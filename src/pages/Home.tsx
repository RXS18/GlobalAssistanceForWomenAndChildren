import { Heart, Users, Target } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex-1">
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-700 to-teal-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">MAKE A CHANGE</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            We stand up for millions of women and children around the world who have been affected by war, poverty and injustice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('/about')}
              className="bg-white text-emerald-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-emerald-700 transition-colors border-2 border-white"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Heart className="text-emerald-600" size={48} />
          </div>
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">WHAT WE DO</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Global Assistance For Women and Children is in the business of changing and shaping lives. Our work is aimed at providing a holistic approach to solving some of our society's biggest challenges. We make sure our partners are empowered by creating opportunities for individuals and communities.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Users className="text-emerald-600" size={48} />
          </div>
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">WHO WE ARE</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Global Assistance For Women And Children is a non-government organization that assists vulnerable women and children who have been abused, marginalized, and forgotten worldwide. GLOBAL ASSISTANCE FOR WOMEN AND CHILDREN knows that our strength lies not only in the words we stand by but, most notably, through the actions of our initiatives. Back in 2018, our Humanitarian Organization realized that we could overcome our challenges much more efficiently by working together. We ultimately decided to launch GLOBAL ASSISTANCE FOR WOMEN AND CHILDREN to change and shape lives worldwide. Our work aims to provide a holistic approach to solving some of our society's biggest challenges.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Target className="text-emerald-600" size={48} />
          </div>
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">OUR VISION</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Through improved access to care and emotional support, vulnerable women and children begin to rebuild their lives, finding opportunities to grow mentally, physically, socially and spiritually.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">OUR PROJECTS</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-emerald-700">Democratic Republic of Congo</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our first project is to aid women and children in The Democratic Republic of Congo. After assessing the population's health in DRC, we developed the GLOBAL ASSISTANCE FOR WOMEN AND CHILDREN project. We identified the need for accessibility to care, particularly in the field of gyneco-obstetrics, pediatrics, and psychiatry. Following sexual violence and other multiple atrocities...
            </p>
            <button
              onClick={() => onNavigate('/projects')}
              className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
