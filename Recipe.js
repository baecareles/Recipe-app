import React from "react"; 
import styles from './Recipe.Module.css'; 

const Recipe = ({ title, calories, image, ingredients }) => { 
    return ( 
        <div className={styles.recipe}> 
            <h1>{title}</h1> 
            <ol> 
                {ingredients.map((ingredient, index) => ( 
                    <li key={index}>{ingredient.text}</li> 
                ))} 
            </ol> 
            <p>Calories: {calories}</p> 
            <img className={styles.image} src={image} alt={title} /> 
        </div> 
    ); 
} 

export default Recipe;
