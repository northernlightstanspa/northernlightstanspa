import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "UV TANNING",
    description: "Experience our state-of-the-art UV tanning beds with multiple levels to choose from. Get that perfect sun-kissed glow year-round.",
    image: "/img/uv-tanning/Titanium/img.jpg",
    href: "/uv-tanning",
  },
  {
    title: "UV-FREE VERSA PRO",
    description: "Get a natural-looking, customizable spray tan without any UV exposure. Our Versa Pro technology provides an even, flawless finish.",
    image: "/img/uv-free-versa/versaspa-model.jpeg",
    href: "/uv-free-versa",
  },
  {
    title: "WELLNESS SERVICES",
    description: "Discover our range of wellness services including Red Light Therapy, Halotherapy Sauna, and more to rejuvenate your body and mind.",
    image: "/img/red-light-therapy/poly-red-face.jpg",
    href: "/red-light-therapy",
  },
];

export default function ServicesSections() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          OUR PREMIUM SERVICES
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className={`relative h-64 flex items-center justify-center overflow-hidden`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="object-cover h-full w-full  group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-pink-500 font-semibold group-hover:text-pink-400">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
