import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import foodImg from "../assets/foodRecipe.png";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export default function RecipeItems() {
  const recipes = useLoaderData();
  const [allRecipes, setAllRecipes] = useState();
  let path = window.location.pathname === "/myRecipe";
  let favItems = JSON.parse(localStorage.getItem("fav")) ?? [];
  const [isFavRecipe, setIsFavRecipe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAllRecipes(recipes);
  }, [recipes]);

  const onDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/receipe/${id}`) // ✅ updated route
      .then((res) => console.log(res));
    setAllRecipes((recipes) => recipes.filter((recipe) => recipe._id !== id));
    let filterItem = favItems.filter((recipe) => recipe._id !== id);
    localStorage.setItem("fav", JSON.stringify(filterItem));
  };

  const favRecipe = (item) => {
    let filterItem = favItems.filter((recipe) => recipe._id !== item._id);
    favItems =
      favItems.filter((recipe) => recipe._id === item._id).length === 0
        ? [...favItems, item]
        : filterItem;
    localStorage.setItem("fav", JSON.stringify(favItems));
    setIsFavRecipe((pre) => !pre);
  };

  return (
    <>
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div
              key={index}
              className="card"
              onDoubleClick={() => navigate(`/recipe/${item._id}`)}
            >
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

              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer">
                    <BsStopwatchFill />
                    {item.time}
                  </div>
                  {!path ? (
                    <FaHeart
                      onClick={() => favRecipe(item)}
                      style={{
                        color: favItems.some((res) => res._id === item._id)
                          ? "red"
                          : "",
                      }}
                    />
                  ) : (
                    <div className="action">
                      <Link to={`/editRecipe/${item._id}`} className="editIcon">
                        <FaEdit />
                      </Link>
                      <MdDelete
                        onClick={() => onDelete(item._id)}
                        className="deleteIcon"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
