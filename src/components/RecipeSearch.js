import React, { Component } from 'react';

export default class RecipeSearch extends Component {
  render() {
  	const { value, handleChange, handleSubmit } = this.props;

    return (
      <React.Fragment>
      	<div className='container'>
      		<div className='row'>
      			<div className='col-10 mx-auto col-md-8 mt-5 text-center'>
      				<h1 className='text-slanted text-capitalize'>
      					search for recipe with <strong className='text-danger'>Food2Fork</strong>
      				</h1>
      				<form className='mt-4' onSubmit={ handleSubmit }>
      					<label className='text-capitalize' htmlFor='search'>type recipes separated by comma</label>
      					<div className='input-group'>
      						<input 
      							type='text' 
      							name='search' 
      							id='search' 
      							placeholder='chicken, inions, carrots'
      							autoFocus={ true }
      							className='form-control'
      							value={ value }
      							onChange={ handleChange }
      						/>
      						<div className='input-group-append'>
      							<button className='input-group-text bg-primary text-white' type='submit'>
      								<i className='fas fa-search'></i>
      							</button>
      						</div>
      					</div>
       				</form>
      			</div>
      		</div>
      	</div>
      </React.Fragment>
    );
  }
}