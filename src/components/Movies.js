import React, { Component } from 'react'

class Movies extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <h2>{this.props.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`}
        />
        <p>
          <span>Overview:</span> {this.props.overview}
        </p>
      </li>
    )
  }
}

export default Movies
