import React, { useState, useEffect } from 'react';
import Banner1 from './Banner/Banner1';
import Banner2 from './Banner/Banner2';
import Banner3 from './Banner/Banner3';

const Carousel = () => {
    const banners = [<Banner1 />, <Banner2 />, <Banner3 />];
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div>
            {banners[currentBanner]}
        </div>
    );
};

export default Carousel;