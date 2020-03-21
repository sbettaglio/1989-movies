import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Movies from './components/Movies'

class App extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    // once the app is added to the page, make an API call to load the data
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=e02fcd07e30880bdc4771c0d0564e80e'
    )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          movies: data.results,
        })
      })
  }

  render() {
    return (
      <>
        <h1>1989 Movies</h1>
        <ul>
          {this.state.movies.map(movie => {
            return (
              <Movies
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overview}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
