
import React, { useEffect, useState } from 'react';
import BannerAPI from '../services/BannerAPI';

function Banner() {

    const [bannerImages, setBannerImages] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    // Calling BannerAPI.
    const BannerDataFetch = async () => {
        const resData = await BannerAPI();
        setBannerImages(resData.data);
    };

    // Using UseEffect to get the banner image
    useEffect(() => {
        BannerDataFetch();
    }, []);

    // Function to change banner images  
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBannerIndex((prevIndex) => (prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1));
        }, 3000); 

        return () => clearInterval(interval);
    }, [bannerImages]);

    return (
        <div>
            {
                bannerImages.map((bannerImage, index) => (
                    <img key={bannerImage.id} src={bannerImage.image} alt="BannerImage"
                        style={{ width: '100%', display: index === currentBannerIndex ? 'block' : 'none', aspectRatio: '16/4' }} />
                ))
            }
        </div>
    );
}

export default Banner;
