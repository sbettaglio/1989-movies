import React, { Component } from 'react'
import Movies from './components/Movies'
import { format } from 'date-fns'

class App extends Component {
  state = {
    movies: [],
    search: '',
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
          movies: data.results.sort(
            (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
          ),
        })
      })
  }
  titleSearch = e => {
    this.setState({
      search: e.target.value,
      movies: this.state.movies.filter(movie => {
        return (
          movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        )
      }),
    })
  }

  render() {
    return (
      <>
        <h1>1989 Movies</h1>
        <form>
          Search by Movie Title:
          <input
            label="Movie Filter"
            icon="search"
            onChange={this.titleSearch}
          />
        </form>
        <ul>
          {this.state.movies.map(movie => {
            return (
              <Movies
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overview}
                release_date={format(new Date(movie.release_date), 'MMM do')}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
