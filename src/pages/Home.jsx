import React from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <CategorySection />
            <Footer />
        </div>
    );
}

export default Home;
