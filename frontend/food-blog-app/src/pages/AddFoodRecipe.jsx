import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({
        title: '',
        time: '',
        ingredients: '',
        instructions: '',
        file: null
    });

    const navigate = useNavigate();

    const onHandleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "ingredients") {
            setRecipeData(prev => ({ ...prev, [name]: value })); // Store raw input for now
        } else if (name === "file") {
            setRecipeData(prev => ({ ...prev, file: files[0] }));
        } else {
            setRecipeData(prev => ({ ...prev, [name]: value }));
        }
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", recipeData.title);
        formData.append("time", recipeData.time);
        formData.append("instructions", recipeData.instructions);

        // Split ingredients by comma and append individually
        recipeData.ingredients.split(",").forEach((item, index) => {
            formData.append(`ingredients[${index}]`, item.trim());
        });

        if (recipeData.file) {
            formData.append("file", recipeData.file);
        }

        try {
            await axios.post("http://localhost:5000/receipe/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': 'bearer ' + localStorage.getItem("token")
                }
            });
            navigate("/");
        } catch (error) {
            console.error("Error uploading recipe:", error);
        }
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={onHandleSubmit}>
                <div className='form-control'>
                    <label>Title</label>
                    <input type="text" className='input' name="title" onChange={onHandleChange} />
                </div>
                <div className='form-control'>
                    <label>Time</label>
                    <input type="text" className='input' name="time" onChange={onHandleChange} />
                </div>
                <div className='form-control'>
                    <label>Ingredients (comma-separated)</label>
                    <textarea className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange}></textarea>
                </div>
                <div className='form-control'>
                    <label>Instructions</label>
                    <textarea className='input-textarea' name="instructions" rows="5" onChange={onHandleChange}></textarea>
                </div>
                <div className='form-control'>
                    <label>Recipe Image</label>
                    <input type="file" className='input' name="file" onChange={onHandleChange} />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}
