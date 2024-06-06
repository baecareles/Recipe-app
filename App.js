import React, { useEffect, useState } from 'react';
import './App.css'; 
import Recipe from './Recipe'; 

const App = () => { 
    const APP_ID = "e0be63f1"; 
    const APP_KEY = "5bb6d232c44afff81e235c81efe13155"; 
    const [recipes, setRecipes] = useState([]); 
    const [search, setSearch] = useState(""); 
    const [query, setQuery] = useState(""); 

    useEffect(() => { 
        getRecipes(); 
    }, [query]); 

    const getRecipes = async () => { 
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        ); 
        const data = await response.json(); 
        setRecipes(data.hits); 
        // console.log(data); 
    }; 

    const updateSearch = e => { 
        setSearch(e.target.value); 
    }; 

    const getSearch = e => { 
        e.preventDefault(); 
        setQuery(search); 
        setSearch(""); 
    } 

    return ( 
        <div className="App">
          <h1>Find your Recipe Here</h1> 
            <form className="search-form" onSubmit={getSearch}> 
                <input 
                    className="search-bar" 
                    type="text" 
                    value={search} 
                    onChange={updateSearch} 
                /> 
                <button className="search-button" type="submit"> 
                    Search 
                </button> 
            </form> 
            <div className="recipes"> 
                {recipes.map(recipe => ( 
                    <Recipe 
                        key={recipe.recipe.label} 
                        title={recipe.recipe.label} 
                        calories={recipe.recipe.calories} 
                        image={recipe.recipe.image} 
                        ingredients={recipe.recipe.ingredients} 
                    /> 
                ))} 
            </div> 
        </div> 
    ); 
} 

export default App;
