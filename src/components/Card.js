import './Card.css'



function FoodCard({ data }) {
  if (data.meals) {
    return (
    
    <div className="cardholder">
  {data.meals.map((a) => {
    const handleButtonClick = () => {
      window.location.href = a.strYoutube;
    };

    return (
      <div className="card" key={a.idMeal}>
        <div className="image">
          <img src={a.strMealThumb} alt={a.strMeal} />
        
        
          <h1>{a.strMeal}</h1>
        
        
          <button  className="button" onClick={handleButtonClick}>watch video</button>
        </div>
      </div>
    );
  })}
</div>

    );
  }  
  else  {
    alert("food not found");
     window.location.reload(false)
  }
}

export default FoodCard;





