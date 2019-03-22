import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
	state = {
		recipes: recipes,
		url: 'https://www.food2fork.com/api/search?key=bd2b0a6604e5d7a984909d015b76d6cb',
		base_url: 'https://www.food2fork.com/api/search?key=bd2b0a6604e5d7a984909d015b76d6cb',
		details_id: 35371,
		pageIndex: 1,
		search: '',
		query: '&q=',
		error: ''
	}

	async getRecipes() {
		try {
			const data = await fetch( this.state.url );
			const jsonData = await data.json();
			
			if ( jsonData.recipes.length === 0 ) {
				this.setState(() => {
					return { error: 'sorry, but your search did not return any results' }
				})
			} else {
				this.setState(() => {
					return { recipes: jsonData.recipes }
				})
			}

		} catch(error) {
			console.log(error);
		}
	}

	componentDidMount() {
		this.getRecipes();
	}

	displayPage( index ) {
		switch( index ) {
			default: 
			case 1:
				return (<RecipeList
					handleDetails={ this.handleDetails }
					recipes={ this.state.recipes }
					value={ this.state.search }
					handleChange={ this.handleChange }
					handleSubmit={ this.handleSubmit }
					error={ this.state.error } />
				);
			case 0:
				return (<RecipeDetails
					handleIndex={ this.handleIndex }
					id={ this.state.details_id } />
				);
		}
	}

	handleIndex = index => {
		this.setState({
			pageIndex: index
		})
	}

	handleDetails = ( index, id ) => {
		this.setState({
			details_id: id,
			pageIndex: index
		})
	}

	handleChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const { base_url, query, search } = this.state;

		this.setState((state, props) => {
			return ({
				url: `${ base_url }${ query }${ search}`,
				search: ''
			})
		},
		() => { this.getRecipes() }
		)
	}

  render() {
    return (
      <React.Fragment>
        { this.displayPage( this.state.pageIndex ) }
      </React.Fragment>
    );
  }
}

export default App;
