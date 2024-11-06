import React, { useState, useEffect, useRef } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

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
    const [imagesToShow, setImagesToShow] = useState(3);
    const [transitioning, setTransitioning] = useState(false);
    const transitionRef = useRef();
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    // Preload images
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const screenLarge = window.innerWidth >= 768;
            setIsLargeScreen(screenLarge);
            setImagesToShow(screenLarge ? 3 : 1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };

    const nextImage = debounce(() => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 300);

    const prevImage = debounce(() => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    }, 300);

    const handlers = useSwipeable({
        onSwipedLeft: () => nextImage(),
        onSwipedRight: () => prevImage(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        transitionRef.current = nextImage;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            transitionRef.current();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!transitioning) return;

        const transitionEndHandler = setTimeout(() => {
            setTransitioning(false);

            if (currentIndex === 0) {
                setCurrentIndex(imageList.length - 2);
            } else if (currentIndex === imageList.length - 1) {
                setCurrentIndex(1);
            }
        }, 500);

        return () => clearTimeout(transitionEndHandler);
    }, [currentIndex, imageList.length, transitioning]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400">
            <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-6">Pizza Niceness...</h1>
            <span className="text-2xl text-center mt-6 text-black">
                There's something magical about sharing a pizza. Whether it's the joy of trying new flavors together,
                the laughter that fills the air, or the way every slice brings people closer, pizza is more than just
                food – it's a bond that connects us all. Join us in celebrating the simple pleasure of sharing a delicious slice with
                friends and family.
            </span>

            <div {...handlers} className="relative w-full mt-10 flex items-center justify-center overflow-hidden">
                {isLargeScreen && (
                    <FaArrowAltCircleLeft
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-2 z-10 text-3xl text-[#7B1FA2] cursor-pointer md:text-4xl lg:text-5xl hidden md:block shadow-lg"
                    />
                )}

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
                                    isLargeScreen || (index === currentIndex) ? 'opacity-100' : 'opacity-50'
                                } transition-opacity duration-500 ease-in-out`}
                            >
                                <img
                                    src={image}
                                    alt={`Pizza ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-md shadow-lg shadow-purple-500/50 border-2 border-[#FFC107]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {isLargeScreen && (
                    <FaArrowAltCircleRight
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-2 z-10 text-3xl text-[#7B1FA2] cursor-pointer md:text-4xl lg:text-5xl hidden md:block shadow-lg"
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
