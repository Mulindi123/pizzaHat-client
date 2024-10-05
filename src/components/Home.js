import React, { useState, useEffect, useRef } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Home = () => {
    const images = [
        "/Pizza maker-amico.svg",
        "/Pizza maker-pana.svg",
        "/Pizza sharing-amico.svg",
        "/Pizza sharing-bro.svg",
        "/Pizza sharing-pana.svg",
        "/Pizza sharing-rafiki.svg",
        "/Pizza maker-cuate.svg",
        "/Pizza maker-bro.svg",
        "/Pizza maker-amico.svg",
        "/Pizza maker-pana.svg",
        "/Pizza sharing-amico.svg",
        "/Pizza sharing-bro.svg",
        "/Pizza sharing-pana.svg",
        "/Pizza sharing-rafiki.svg",
        "/Pizza maker-cuate.svg",
        "/Pizza maker-bro.svg",
    ];

    const imageList = [images[images.length - 1], ...images, images[0]];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [imagesToShow, setImagesToShow] = useState(3); // Default to 3 images
    const [transitioning, setTransitioning] = useState(false);
    const transitionRef = useRef();

    // Function to go to the next set of images
    const nextImage = () => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevImage = () => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    // Effect to handle responsiveness and update the number of images to show
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setImagesToShow(1); // Show 1 image on screens smaller than 768px (mobile)
            } else {
                setImagesToShow(3); // Show 3 images on larger screens (tablets and above)
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Automatic slide effect
    useEffect(() => {
        transitionRef.current = nextImage;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            transitionRef.current();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Effect to handle transitions and seamless looping
    useEffect(() => {
        if (!transitioning) return;

        const transitionEndHandler = setTimeout(() => {
            setTransitioning(false);

            // Reset position when reaching the cloned images for seamless looping
            if (currentIndex === 0) {
                setCurrentIndex(imageList.length - 2); // Go to the last "real" image
            } else if (currentIndex === imageList.length - 1) {
                setCurrentIndex(1); // Go to the first "real" image
            }
        }, 500); // Transition duration of 0.5s

        return () => clearTimeout(transitionEndHandler);
    }, [currentIndex, imageList.length, transitioning]);

    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-extrabold text-gold text-center mb-6">Pizza Niceness...</h1>
            <span className="text-2xl text-center mt-6 text-light-gray">
                There's something magical about sharing a pizza. Whether it's the joy of trying new flavors together,
                the laughter that fills the air, or the way every slice brings people closer, pizza is more than just
                food – it's a bond that connects us all. Join us in celebrating the simple pleasure of sharing a delicious slice with
                friends and family.
            </span>

            {/* Image Carousel */}
            <div className="relative w-full mt-10 flex items-center justify-center overflow-hidden">
                {/* Left Arrow */}
                <FaArrowAltCircleLeft
                    onClick={prevImage}
                    className="absolute left-2 z-10 text-3xl text-gray-600 cursor-pointer md:text-4xl lg:text-5xl hidden md:block" // Hide on small screens
                />

                {/* Image Container */}
                <div className="w-full md:w-3/4 h-[300px] md:h-[500px] overflow-hidden relative flex justify-center items-center">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex * 100) / imagesToShow}%)`,
                        }}
                    >
                        {imageList.map((image, index) => (
                            <div
                                key={index}
                                className={`flex-none w-full md:w-1/2 lg:w-1/3 h-[300px] md:h-[500px] px-2 ${
                                    // Responsive width classes
                                    index >= currentIndex && index < currentIndex + imagesToShow
                                        ? 'opacity-100'
                                        : 'opacity-50'
                                } transition-opacity duration-500 ease-in-out`}
                            >
                                <img
                                    src={image}
                                    alt={`pizza-${index}`}
                                    className="w-full h-full object-cover rounded-md shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <FaArrowAltCircleRight
                    onClick={nextImage}
                    className="absolute right-2 z-10 text-3xl text-gray-600 cursor-pointer md:text-4xl lg:text-5xl hidden md:block" // Hide on small screens
                />
            </div>
        </div>
    );
};

export default Home;
