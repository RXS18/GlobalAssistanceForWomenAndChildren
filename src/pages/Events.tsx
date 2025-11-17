import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const eventsPlaceholder = [];

  return (
    <div className="flex-1">
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl leading-relaxed">
            Join us in making a difference. Discover upcoming events and opportunities to get involved.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {eventsPlaceholder.length === 0 ? (
            <div className="text-center py-16">
              <div className="flex justify-center mb-6">
                <Calendar className="text-gray-400" size={64} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                No upcoming events scheduled at this time.
              </h2>
              <p className="text-gray-600">Stay tuned for updates!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {eventsPlaceholder.map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Event Name</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar size={18} className="mr-3 text-emerald-600" />
                          <span>December 5, 2025</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock size={18} className="mr-3 text-emerald-600" />
                          <span>10:00 AM - 12:00 PM</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={18} className="mr-3 text-emerald-600" />
                          <span>Community Center</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Brief description of the event, its purpose, or activities. This provides context about what attendees can expect and why they should participate.
                      </p>
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-8">
                      <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap">
                        RSVP
                      </button>
                    </div>
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
