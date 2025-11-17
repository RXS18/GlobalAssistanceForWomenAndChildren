import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const newsPlaceholder = [];

  return (
    <div className="flex-1">
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">News</h1>
          <p className="text-xl leading-relaxed">
            Stay updated with our latest activities, achievements, and stories from the field.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {newsPlaceholder.length === 0 ? (
            <div className="text-center py-16">
              <div className="flex justify-center mb-6">
                <Calendar className="text-gray-400" size={64} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                No news articles available yet.
              </h2>
              <p className="text-gray-600">Please check back soon for updates!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsPlaceholder.map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>November 17, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">News Article Title</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Short summary or excerpt of the news article, providing readers with a glimpse of the content.
                    </p>
                    <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                      Read More
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
