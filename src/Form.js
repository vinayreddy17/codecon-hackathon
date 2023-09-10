
import React, { useState } from 'react';
import FoodCard from './components/Card';
import HandleSubmit from './Handlesubmit';


function MyForm() {
  const [foodName, setFoodName] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data
  

  const handleChange = (e) => {
    setFoodName(e.target.value);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    HandleSubmit(foodName, setSubmittedData);
  };
  
  
  return (
    <div>
      
      <form onSubmit={handleFormSubmit }>
        <input  
          type="text"
          placeholder="Enter a food name"
          value={foodName}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
<br></br>
<br/>
<br/>
<br/>
      {submittedData && <FoodCard data={submittedData} />}
    </div>
  );
}

export default MyForm;
