import React, { useRef, useState, useEffect } from 'react';
import GetProducts from "../components/GetProducts/GetProducts";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function LandingPage() {
  const productsRef = useRef(null); 
  const [currentSlide, setCurrentSlide] = useState(0); 
  const [carouselImages, setCarouselImages] = useState([]); 

  const handleCartUpdate = (count) => {
    console.log(`El carrito ahora tiene ${count} productos.`);
  };

  const handleShopNowClick = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductImages = (products) => {
    const images = products.map((product) => ({
      id: product.id,
      image: product.image,
    }));
    setCarouselImages(images); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 2) % carouselImages.length); 
    }, 2000);
    return () => clearInterval(interval); 
  }, [carouselImages]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 2 : prev - 2));
  };

  return (
    <div>
      <div style={{ height: 110 }}></div>
      <main className="pt-20">
        <div className="relative flex justify-center items-center h-[200px] md:h-[300px] lg:h-[400px] mx-auto" style={{ maxWidth: '600px' }}>
          <Image
            src="/imagenInicio2.png"
            alt="Imagen de Entrada"
            layout="intrinsic"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Botón "Shop Now" centrado */}
        <div className="flex justify-center mt-16">
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-full text-lg md:text-xl lg:text-2xl hover:bg-red-700"
            onClick={handleShopNowClick}
          >
            Shop Now..!
          </button>
        </div>

        {/* Carrusel de imágenes de productos */}
        {carouselImages.length > 0 && (
          <div className="relative w-full max-w-5xl mx-auto mt-10">
            <div className="relative h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden flex">
              {carouselImages.slice(currentSlide, currentSlide + 2).map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <div className="flex-shrink-0 w-1/2 p-2">
                    <Image
                      src={product.image}
                      alt={`Producto ${product.id}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Botones de navegación del carrusel */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              onClick={prevSlide}
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              onClick={nextSlide}
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        )}

        {/* Sección GetProducts */}
        <div ref={productsRef} className="mt-12 px-4 lg:px-20">
          <GetProducts onCartUpdate={handleCartUpdate} onProductLoad={handleProductImages} />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
