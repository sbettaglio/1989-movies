import React, { Component } from 'react'

class Movies extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <h2>{this.props.title}</h2>
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`}
          />
          <aside>
            <p>
              <span>Overview:</span> {this.props.overview}
            </p>
            <p>
              <span>Release date:</span> {this.props.release_date}
            </p>
          </aside>
        </section>
      </li>
    )
  }
}

export default Movies
