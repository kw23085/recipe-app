import React from 'react';

const API_KEY = "9d04ac8c044a10f960329cb97a0bcd97";

class Recipe extends React.Component {

    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        
        const res = await req.json();
        console.log(res);
    }

    render() {
        console.log(this.props);
        return (
          <div>Recipe Component!</div>  
        );
    }
}

export default Recipe;