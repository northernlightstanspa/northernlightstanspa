import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  {
    title: "SIGN UP FOR SPECIALS",
    image: "/img/signupforspeacials.jpg",
    href: "https://newsunshinehub.com/client_wsf/f/44b7d7f9ab84d328dab4fa63c55101108e8f1291",
  },
  {
    title: "CURRENT PROMOTIONS",
    image: "/img/currentpromotions.jpg",
    href: "/promotions",
  },
  {
    title: "MEMBERSHIPS",
    image: "/img/memberships.jpg",
    href: "/pricing",
  },
  {
    title: "TANNING LOTIONS",
    image: "/img/tanninglotions.jpg",
    href: "/tanning-lotions",
  },
];

export default function QuickLinks() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative group overflow-hidden block aspect-[4/3]"
            >
              <Image
                src={link.image}
                alt={link.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
             
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
