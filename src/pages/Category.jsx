import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/header.css';
import CategoryAPI from '../services/CategoryAPI';
import Footer from '../components/Footer';

const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Laptops');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await CategoryAPI();
                setCategoryData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        };

        fetchData();
    }, []);

    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center' }}>
                <button style={selectedCategory === 'Laptops' ? { ...buttonStyle, backgroundColor: 'Black' } : buttonStyle} onClick={() => handleCategorySelect('Laptops')}>Laptop</button>
                <button style={buttonStyle} onClick={() => handleCategorySelect('Smartphones')}>Smartphones</button>
                <button style={buttonStyle} onClick={() => handleCategorySelect('bottle')}>Bottles</button>
                <button style={buttonStyle} onClick={() => handleCategorySelect('cars')}>Cars</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {categoryData.data.category.map(category => (
                        <div key={category.id}>
                            {selectedCategory === category.name && (
                                <>
                                    <h1 style={{ margin: '18px 0' }}>{category.name}</h1>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        {category.product_details.map(product => (
                                            <div key={product.id} style={{ width: '350px', height: '250px', padding: '2px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '38px' }}>
                                                {product.product_images.length > 0 && (
                                                    <img
                                                        src={product.product_images[0].image}
                                                        alt={product.img}
                                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                    />
                                                )}
                                                <h4 style={{ fontWeight: 'bold', margin: '10px 0' }}>{product.name}</h4>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
                   <Footer />

        </div>
    );
};

const buttonStyle = {
    margin: '18px 5px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '20px'
};

export default Category;
