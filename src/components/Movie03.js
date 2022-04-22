import React from 'react';
import PropTypes from 'prop-types';
import './Movie03.css';
import { Link } from 'react-router-dom';

// props 대신 {객체 분할}로 바로 보내기~
function Movie03({ key, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link to={{ pathname: '/movie-detail', state: { key, year, title, summary, poster, genres } }}>
        <img src={poster} alt={title} title={title} />
        <div className="movie-data">
          <h3 className="movie-title">TITLE : {title}</h3>
          <h5 className="movie-year">YEAR : {year}</h5>
          <ul className="movie-genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie-genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie-summary">SUMMARY : {summary.slice(0, 180)}...</p>
          <hr />
        </div>
      </Link>
    </div>
  );
}

Movie03.propTypes = {
  //   id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie03;
