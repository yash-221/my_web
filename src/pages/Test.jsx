import React, { useState, useEffect } from 'react';
import Headers from '../components/Headers';
import '../styles/header.css';

const Category = () => {
    const [categoryData, setCategoryData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Laptops');

    useEffect(() => {
        const fetchCategoryData = async () => {
            const host = 'https://testapi.arbsindia.com/public/api';
            const endpoint = 'get-public-category-details-list';

            try {
                const response = await fetch(`${host}/${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        business_id: "105" // Make sure to stringify the business_id
                    })
                });

                const data = await response.json();
                setCategoryData(data);
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        };

        fetchCategoryData();
    }, []);

    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    // Render loading state or category data
    return (
        <div>
            <Headers /> {/* Include the Headers component */}
            <div style={{ textAlign: 'center' }}>
                <button style={selectedCategory === 'Laptops' ? { ...buttonStyle, backgroundColor: 'Black' } : buttonStyle} onClick={() => handleCategorySelect('Laptops')}>Laptop</button>
                <button style={buttonStyle} onClick={() => handleCategorySelect('Smartphones')}>Smartphones</button>
                <button style={buttonStyle} onClick={() => handleCategorySelect('Bottles')}>Bottles</button>
                <button style={buttonStyle} onClick={() => handleCategorySelect('Cars')}>Cars</button>
            </div>
            {categoryData ? (
                <ul>
                    {categoryData.data.category.map(category => (
                        <li key={category.id}>
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
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
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

