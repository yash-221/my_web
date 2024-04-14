// CategoryAPI.js

const CategoryAPI = async () => {
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
        return data;
    } catch (error) {
        throw new Error(`Error fetching category data: ${error}`);
    }
};

export default CategoryAPI;
