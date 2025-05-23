import React from "react";
import profileImg from "../assets/profile.png";
import food from "../assets/foodRecipe.png";
import { useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const recipe = useLoaderData();
  console.log(recipe);
  return (
    <>
      <div className="outer-container">
        <div className="profile">
          <img src={profileImg} width="50px" height="50px"></img>
          <h5>{recipe.email}</h5>
        </div>
        <h3 className="title">{recipe.title}</h3>
        <img
          src={`http://localhost:5000/images/${item.coverImage}`}
          width="120px"
          height="100px"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = foodImg;
          }}
          alt="Recipe"
        />
        <div className="recipe-details">
          <div className="ingredients">
            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h4>Instructions</h4>
            <span>{recipe.instructions}</span>
          </div>
        </div>
      </div>
    </>
  );
}
