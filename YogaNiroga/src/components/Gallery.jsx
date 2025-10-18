import React from "react";

const images = [
  {
    src: "/images/gallery1.jpg",
    alt: "Morning yoga session",
  },
  {
    src: "/images/gallery2.jpg",
    alt: "Group meditation class",
  },
  {
    src: "/images/gallery3.jpg",
    alt: "Outdoor yoga practice",
  },
  {
    src: "/images/gallery4.jpg",
    alt: "Balance pose practice",
  },
  {
    src: "/images/gallery5.jpg",
    alt: "Strength and flexibility session",
  },
  {
    src: "/images/gallery6.jpg",
    alt: "Peaceful sunset yoga",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Our <span className="text-primary">Yoga Moments</span>
        </h2>
        <p className="mb-12 text-lg opacity-80">
          A glimpse into our sessions — balance, peace, and connection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
