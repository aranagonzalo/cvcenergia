import { useState } from "react";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        console.log(currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[calc(-100%*1)]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-full bg-gray-200 p-8"
                        style={{ "--index": currentIndex + index }}
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            {item.title}
                        </h2>
                        <h3 className="text-lg font-semibold mb-2">
                            {item.subtitle}
                        </h3>
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-800 text-white"
                onClick={nextSlide}
            >
                &rarr;
            </button>
        </div>
    );
};

export default Carousel;
