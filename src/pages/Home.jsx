import React from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import Headers from '../components/Headers';

function Home() {
    return (
        <div>
            <Headers />
            <Banner />
            <CategorySection />
            <Footer />
        </div>
    );
}

export default Home;
