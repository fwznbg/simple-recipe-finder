import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className='recipe-card'>
            <h1 className='title'>{title}</h1>
            <p className='cal'>{calories} Calories</p>
            <ul className='ingredients'>
                {ingredients.map(ingredient=>(
                    <li>{ingredient}</li>
                ))}
            </ul>
            <img className='pict' src={image} alt="" />
        </div>
    );
}

export default Recipe;