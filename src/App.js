import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';


function App() {
  const APP_ID = '69d07d61';
  const APP_KEY = 'f6a0ce57222c26ed5a928aa01e83cb80';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect(()=>{
    getRecipes();
  }, [query]);   

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className='web-title'>Recipe Finder</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" placeholder="search something" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="result">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines}
          />
      ))}
      </div>
    </div>
  );
}

export default App;
