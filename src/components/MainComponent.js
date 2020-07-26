import React, { Component } from 'react';
import SearchMovies from './SearchMovieComponent'

class Main extends Component {
    render() {
        return (
            <div className="container">
              <h1 className='title'>React Movie Search</h1> 
              <SearchMovies />
            </div>
        );
    }
}

export default Main;

