const BannerAPI = async () => {
    try {
        const host = 'https://testapi.arbsindia.com/public/api';
        const endpoint = "get-public-banner-list";
        const payload = { business_id: 39 };

        const response = await fetch(`${host}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        return console.error(error);
    }
};

export default BannerAPI;
