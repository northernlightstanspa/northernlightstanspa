import Bubbles from "@/components/Bubbles";
import ImageGallery, { type GalleryImage } from "@/components/ImageGallery";
import PageHero from "@/components/PageHero";

const images: GalleryImage[] = [
  { src: "/img/halotherapy-sauna/image2.png", alt: "Halotherapy Sauna View 1", width: 2000, height: 1429 },
  { src: "/img/halotherapy-sauna/image3.png", alt: "Halotherapy Sauna View 2", width: 2000, height: 1429 },
  { src: "/img/halotherapy-sauna/image1.png", alt: "Halotherapy Sauna View 3", width: 940, height: 788 },
  { src: "/img/halotherapy-sauna/image0.png", alt: "Halotherapy Sauna View 4", width: 1415, height: 2000 },
  { src: "/img/halotherapy-sauna/image4.png", alt: "Halotherapy Sauna View 5", width: 1080, height: 1080 },
];

export default function HalotherapySaunaPage() {
  return (
    <>
      <PageHero title="Halotherapy (dry salt) Infrared Sauna" crumb="Halotherapy Sauna" eyebrow="Wellness" />

      {/* Gallery Section */}
      <section className="section">
        <Bubbles />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ImageGallery images={images} />
        </div>
      </section>
    </>
  );
}
