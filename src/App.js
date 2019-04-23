import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";

const API_KEY = "9d04ac8c044a10f960329cb97a0bcd97";


class App extends Component {

  state = {
    recipes: []  
  }
  
  getRecipe = async (e) => {
    const recipeNmae = e.target.elements.recipeName.value
    e.preventDefault();
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&page=2`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        { this.state.recipes.map((recipe) => {
          return <p key={recipe.recipe_id}>{ recipe.title }</p>
        }) }
      </div>
    );
  }
}

export default App;