
import axios from 'axios';


const handleSubmit = async (foodName, setSubmittedData) => {
  if (!foodName) {
    alert('Enter a food name to search');
    return;
  }

  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
    const data = response.data;
    console.log(data);

    // Set the submitted data in state
    setSubmittedData(data);
    
  } catch (error) {
    console.error('Error fetching data:', error);
  
    setSubmittedData(null);
  }
};

export default handleSubmit;
