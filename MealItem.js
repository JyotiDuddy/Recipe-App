import React from "react";

function MealItem({ data }) {
  return (
    <div>
      <div className="card">
        <img src={data.strMealThumb} alt="meal" />
        <div className="info">
          <h2>{data.strMeal}</h2>
          <p>{data.strArea} food</p>
        </div>
        <div className="recipe">
          <h2>Recipe</h2>
          <p>{data.strInstructions}</p>
          <img src={data.strMealThumb} alt="meal" />
          <a href={data.strSource}>Watch video</a>
        </div>
      </div>
    </div>
  );
}
export default MealItem;
