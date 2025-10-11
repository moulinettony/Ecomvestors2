
import React, { useState, useEffect } from 'react';
import SparklesCore from './ui/SparklesCore';
import Button from './ui/Button';

// Define item types for the gallery and lightbox
interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  alt: string;
}

// Gallery items from user-provided links
const galleryItems: GalleryItem[] = [
    // Videos
    { type: 'video', src: 'https://www.ecomvestors.com/assets/testimonials/videos/video-1.mp4', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/videos/posters/video-poster-1.png', alt: 'Video Testimonial 1' },
    { type: 'video', src: 'https://www.ecomvestors.com/assets/testimonials/videos/video-2.mp4', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/videos/posters/video-poster-2.png', alt: 'Video Testimonial 2' },
    { type: 'video', src: 'https://www.ecomvestors.com/assets/testimonials/videos/video-3.mp4', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/videos/posters/video-poster-3.png', alt: 'Video Testimonial 3' },
    { type: 'video', src: 'https://www.ecomvestors.com/assets/testimonials/videos/video-4.mp4', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/videos/posters/video-poster-4.png', alt: 'Video Testimonial 4' },
    { type: 'video', src: 'https://www.ecomvestors.com/assets/testimonials/videos/video-5.mp4', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/videos/posters/video-poster-5.png', alt: 'Video Testimonial 5' },
    { type: 'video', src: 'https://www.ecomvestors.com/assets/testimonials/videos/video-6.mp4', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/videos/posters/video-poster-6.png', alt: 'Video Testimonial 6' },
    { type: 'video', src: 'https://www.ecomvestors.com/assets/testimonials/videos/video-7.mp4', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/videos/posters/video-poster-7.png', alt: 'Video Testimonial 7' },
    // Images
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-1.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-1.jpg', alt: 'Image Testimonial 1' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-2.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-2.jpg', alt: 'Image Testimonial 2' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-3.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-3.jpg', alt: 'Image Testimonial 3' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-4.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-4.jpg', alt: 'Image Testimonial 4' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-5.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-5.jpg', alt: 'Image Testimonial 5' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-6.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-6.jpg', alt: 'Image Testimonial 6' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-7.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-7.jpg', alt: 'Image Testimonial 7' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-8.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-8.jpg', alt: 'Image Testimonial 8' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-9.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-9.jpg', alt: 'Image Testimonial 9' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-10.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-10.jpg', alt: 'Image Testimonial 10' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-11.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-11.jpg', alt: 'Image Testimonial 11' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-12.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-12.jpg', alt: 'Image Testimonial 12' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-13.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-13.jpg', alt: 'Image Testimonial 13' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-14.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-14.jpg', alt: 'Image Testimonial 14' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-15.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-15.jpg', alt: 'Image Testimonial 15' },
    { type: 'image', src: 'https://www.ecomvestors.com/assets/testimonials/images/image-16.jpg', thumbnail: 'https://www.ecomvestors.com/assets/testimonials/images/image-16.jpg', alt: 'Image Testimonial 16' },
];


const Lightbox = ({ items, activeIndex, onClose, onNext, onPrev }: { items: GalleryItem[], activeIndex: number, onClose: () => void, onNext: () => void, onPrev: () => void }) => {
    const activeItem = items[activeIndex];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {activeItem.type === 'image' ? (
                    <img src={activeItem.src} alt={activeItem.alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" />
                ) : (
                    <video src={activeItem.src} controls autoPlay className="max-w-full max-h-[90vh] rounded-lg" />
                )}
            </div>

            <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors" aria-label="Close lightbox">
                &times;
            </button>
            <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors" aria-label="Previous item">
                &#8250;
            </button>
            <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors" aria-label="Next item">
                &#8249;
            </button>
        </div>
    );
};


const Wins: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(10);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  // FIX: The modulo operator in JS can return a negative number. Corrected logic to ensure it always wraps around positively.
  const goToNext = () => {
    if (lightboxIndex !== null) {
        setLightboxIndex((prevIndex) => (prevIndex! + 1) % galleryItems.length);
    }
  };
  
  const goToPrev = () => {
    if (lightboxIndex !== null) {
        setLightboxIndex((prevIndex) => (prevIndex! - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleLoadMore = () => {
    setVisibleItemsCount(galleryItems.length);
  };

  return (
    <section dir="rtl" className="bg-[#181c14]  py-10 text-center text-white relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-800 to-teal-700 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>

        <div className="absolute inset-0 -z-20 h-full w-full">
            <SparklesCore
                id="tsparticleswins"
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={1.5}
                className="h-full w-full"
                particleColor="#FFFFFF"
            />
        </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
        <p className="text-sm text-green-400 font-semibold mb-2 inline-block">
          عرض قصص النجاح
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          نظرة سريعة على الانتصارات
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          شاهد النتائج. اطلع على لقطات الشاشة ومقاطع الفيديو من طلابنا الذين يحققون مكاسب حقيقية في سوق الدفع عند الاستلام.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {galleryItems.slice(0, visibleItemsCount).map((item, index) => (
            <button 
                key={index} 
                onClick={() => openLightbox(index)}
                className="group rounded-3xl overflow-hidden bg-gray-800/50 shadow-lg border border-gray-800 hover:border-green-500/50 hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                aria-label={`View ${item.alt}`}
            >
              <div className="relative w-full h-full aspect-square">
                <img src={item.thumbnail} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <svg className="h-12 w-12 text-white opacity-80" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {visibleItemsCount < galleryItems.length && (
                 <Button
                    onClick={handleLoadMore}
                    variant="default"
                    shape="pill"
                    size="lg"
                    className="w-full max-w-sm text-lg"
                >
                    <span className="flex items-center justify-center text-green-600">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path opacity=".4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor"></path>
                            <path opacity=".97" d="M12 10.311a1.31 1.31 0 1 0 0-2.62 1.31 1.31 0 0 0 0 2.62ZM8.31 13.691c-.72 0-1.31.59-1.31 1.31 0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31ZM15.69 13.691c-.72 0-1.31.59-1.31 1.31 0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    تحميل المزيد
                </Button>
            )}
             <a href="#" className="w-full max-w-sm sm:max-w-md md:max-w-lg no-underline">
                <Button 
                    variant="secondary" 
                    shape="pill" 
                    size="lg"
                    className="w-full text-lg"
                >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path opacity=".4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor"></path>
                        <path d="M12 15.881a3.88 3.88 0 1 0 0-7.76 3.88 3.88 0 0 0 0 7.76ZM17 7.5a.99.99 0 0 1-.71-.29c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38-.12.23-.21.33c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08Z" fill="currentColor"></path>
                    </svg>
                    اكتشف المزيد على انستغرام
                </Button>
            </a>
        </div>
      </div>
       <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-800 to-teal-700 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>

        {lightboxIndex !== null && (
            <Lightbox 
                items={galleryItems}
                activeIndex={lightboxIndex}
                onClose={closeLightbox}
                onNext={goToNext}
                onPrev={goToPrev}
            />
        )}
    </section>
  );
};

export default Wins;
