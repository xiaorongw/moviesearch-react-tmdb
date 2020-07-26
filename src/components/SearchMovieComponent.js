import React from 'react';

export default function SearchMovies() {

    
    // use async/await with fetch to call the TMDB API
    const searchMovies = async (e) => { 
        e.preventDefault() // prevent page from refreshing on submit
        console.log("submitting")

        const query = 'Jurassic Park'

        const url = `https://api.themoviedb.org/3/search/movie?api_key=15ecfb6a33837672e969c55deb4a503f&language=en-US&query=${query}`;

        // when interacting with APIs, remember to handle error -- use try/catch
        try {
            const res = await fetch(url); // fetch returns a promise -- use await to wait until promise settles and returns its result
            const data = await res.json(); // response.json() again returns a promise -- use await
            console.log(data)
        } 
        catch (err) {
            console.error(err);
        }
    }

    return (
        <form className='form' onSubmit={searchMovies}>
            <label htmlFor='query' className='label'>Movie Name</label>
            <input type='text' className='input' name='query' placeholder='i.e. Jurassic Park'></input>
            <button className='button' type='submit'>
                Search
            </button>
        </form>
    )
}