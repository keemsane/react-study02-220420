import React from 'react';
import axios from 'axios';
import Movie03 from '../components/Movie03';

import './Home.css';
// 이제 App07 내용처럼 바꿔서 영화 출력하기~
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading, movies } = this.state;
    
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            <h1>THE MOVIE FESTA</h1>
            <hr />
            {movies.map((movie) => {
              
              return (
                <Movie03
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }

  getMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=5&sort_by=rating');
      this.setState({ movies: movies, isLoading: false });

    } catch (error) {
      console.log('!ERROR ALERT! !ERROR ALERT! !ERROR ALERT!');
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }
}

export default Home;