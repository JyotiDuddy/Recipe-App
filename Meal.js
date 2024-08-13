import React, { useState } from "react";
import MealItem from "./MealItem";

function Meal() {
  const [search, setSearch] = useState("");
  const [receipe, SetReceipe] = useState([]);
  const searchHandler = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        SetReceipe(data.meals);
      });
    setSearch("");
  };
  return (
    <div>
      <div className="heading">
        <h1>Recipe App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quam, quasi voluptatum consequuntur
        </p>
        <input
          type="search"
          placeholder="Enter Food Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={searchHandler}>search</button>
      </div>
      <div className="container">
        {receipe === null ? (
          <p className="notSearch">Not found</p>
        ) : (
          receipe.map((res) => {
            return <MealItem data={res} />;
          })
        )}
      </div>
    </div>
  );
}
export default Meal;
