import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-32 md:h-48">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/60 via-orange-300/40 to-cyan-400/50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg">
              Locations
            </h1>
          </div>
        </section>

        {/* Location Content */}
        <section className="py-12 relative overflow-hidden">
          {/* Decorative background bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full -mr-32 -mt-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200/30 rounded-full border-2 border-cyan-300/40 -z-10"></div>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-100/40 rounded-full -ml-20 border-4 border-teal-200/30 -z-10"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-sky-200/30 rounded-full border-2 border-sky-300/40 -z-10"></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>
          <div className="absolute top-1/2 right-10 w-48 h-48 bg-blue-100/35 rounded-full border-3 border-blue-200/40 -z-10"></div>
          <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-teal-200/40 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute top-3/4 right-1/4 w-52 h-52 bg-sky-200/35 rounded-full border-3 border-sky-300/40 -z-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-blue-300/30 rounded-full border-2 border-blue-400/40 -z-10"></div>
          <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-cyan-100/40 rounded-full border-4 border-cyan-200/30 -z-10"></div>
          <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-teal-200/30 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full -ml-32 -mb-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100/40 rounded-full -mr-24 -mb-24 border-4 border-sky-200/30 -z-10"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-4">
            {/* Location Title */}
            <h2 className="text-xl md:text-2xl mb-6">
              <span className="text-orange-500">Northern Lights Tan Spa</span>
              <span className="text-gray-800"> - Cedarburg</span>
            </h2>

            {/* Google Map */}
            <div className="w-full max-w-md mb-8">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md border border-gray-200">
                
                <iframe 
                
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5590456723203!2d-87.97768252335!3d43.30255527503819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804e5782e88d047%3A0xef8ed7d5e7706eb3!2sNorthern%20Lights%20Tan%20Spa%20Inc!5e0!3m2!1sen!2sbd!4v1769670127457!5m2!1sen!2sbd"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0"></iframe>
              </div>
            </div>

            {/* Address and Contact */}
            <div className="space-y-1 text-gray-700 text-sm mb-6">
              <p className="font-medium">Northern Lights Tan Spa – Cedarburg</p>
              <p>W51N731 Keup Rd, Cedarburg, WI</p>
              <p>Tel: 262-387-1485</p>
            </div>

            {/* Hours */}
            <div className="space-y-1 text-gray-700 text-sm">
              <p>Monday – Thursday 10:00am – 7:00pm</p>
              <p>Friday 10:00am – 6:00pm</p>
              <p>Saturday 9:00am – 3:00pm</p>
              <p>Sunday 10:00am – 3:00pm</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
