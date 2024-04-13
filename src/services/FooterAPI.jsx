// FooterAPI.jsx

const FooterAPI = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business_id: 8 }) 
      };
    
      const response = await fetch('https://testapi.arbsindia.com/public/api/get-public-business-details-list', requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export default FooterAPI;
  