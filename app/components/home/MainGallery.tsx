// app/components/gallery/MainGallery.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


// ---------------- Types ----------------
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
}

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
  className?: string;
}

// ---------------- Lightbox Component ----------------
const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
  onClick={onClose}
>
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ type: "spring", damping: 25 }}
    className="
      relative 
      w-full 
      max-w-sm 
      sm:max-w-md 
      md:max-w-lg 
      lg:max-w-2xl 
      max-h-[60vh] 
      sm:max-h-[70vh] 
      md:max-h-[80vh] 
      lg:max-h-[85vh] 
      mb-32
    "
    onClick={(e) => e.stopPropagation()}
  >
    <Image
      src={image.src}
      alt={image.alt}
      width={1000}  // smaller width for balanced view
      height={800}  // smaller height
      className="w-full h-full object-contain rounded-lg"
    />
    <button
      onClick={onClose}
      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#C9A14A] text-black transition-colors"
      aria-label="Close lightbox"
    >
      X
    </button>
    <div className="absolute bottom-4 left-4 right-4 text-center">
      <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-black/50 backdrop-blur-sm">
        {image.category}
      </span>
    </div>
  </motion.div>
</motion.div>


  );
};

// ---------------- Gallery Item Component ----------------
const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg cursor-pointer border border-[#C9A14A] ${className}`}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(image)}
    
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
             
            >
              <span
                className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#C9A14A]"
                 
              >
                {image.category}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// ---------------- Gallery Data ----------------
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1597368457044-fd0c441b3038?w=600&auto=format&fit=crop&q=60",
    alt: "Dance performance with vibrant energy",
    category: "Wedding",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559189583-52ecf18461f4?w=600&auto=format&fit=crop&q=60",
    alt: "Energetic Zumba fitness class",
    category: "Live Concert",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1709059480517-a2bba843bda5?w=600&auto=format&fit=crop&q=60",
    alt: "Beautiful wedding celebration moments",
    category: "Open Mic",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556720095-a20f6b895f95?w=600&auto=format&fit=crop&q=60",
    alt: "Contemporary dance choreography",
    category: "Corporate Event",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1757748594542-f80a2239dbbb?w=600&auto=format&fit=crop&q=60",
    alt: "High-energy Zumba workout session",
    category: "Exhibition",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1757748594542-f80a2239dbbb?w=600&auto=format&fit=crop&q=60",
    alt: "Elegant wedding dance performance",
    category: "Wedding",
  },
];

// ---------------- Main Gallery Component ----------------
const MainGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="w-full px-6 py-20 bg-[#0F0F0F]">
      {/* Section Heading */}
      <div className="text-center mb-10">
        
       
        <h2
          className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl"
        
        >
          Gallery Highlights
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Capturing moments of grace, energy, and celebration
        </p>
      </div>

      {/* Desktop Masonry */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 max-w-7xl mx-auto" style={{ height: "400px" }}>
        <GalleryItem image={galleryImages[0]} onClick={setSelectedImage} className="col-span-1 row-span-2" />
        <GalleryItem image={galleryImages[1]} onClick={setSelectedImage} className="col-span-1 row-span-1" />
        <GalleryItem image={galleryImages[2]} onClick={setSelectedImage} className="col-span-1 row-span-1" />
        <GalleryItem image={galleryImages[3]} onClick={setSelectedImage} className="col-span-1 row-span-2" />
        <GalleryItem image={galleryImages[4]} onClick={setSelectedImage} className="col-span-2 row-span-1" />
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 max-w-5xl mx-auto auto-rows-fr">
        {galleryImages.map((image) => (
          <GalleryItem key={image.id} image={image} onClick={setSelectedImage} className="w-full h-full aspect-4/2" />
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="grid md:hidden grid-cols-1 gap-3 max-w-2xl mx-auto">
        {galleryImages.map((image) => (
          <GalleryItem key={image.id} image={image} onClick={setSelectedImage} className="h-55 sm:h-65" />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default MainGallery;
