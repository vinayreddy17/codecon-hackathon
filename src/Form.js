// import React, { useState } from 'react';
// import axios from 'axios';
// import FoodCard from './components/Card';

// function MealFinder() {
//   const [foodName, setFoodName] = useState('');

  

//   const handleChange = (e) => {
//     setFoodName(e.target.value);
//     console.log(foodName)
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!foodName) {
//       alert('Enter a food name to search');
//       return;
//     }

//     else {
//       const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
//         console.log(response.data);
//       return (<FoodCard data={response.data}/>);
      
//     }
//   };

//   return (
//     <div>
      
//       <form  id="myform" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a food name"
//           value={foodName}
//            onChange={handleChange}
//         />
//         <button id="submit" type="submit">Search</button>
//       </form>
     

//     </div>
//   );
// }

// export  default MealFinder ;

















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
