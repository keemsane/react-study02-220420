import React from 'react';
import PropTypes from 'prop-types';
import './Movie03.css'

// props 대신 {객체 분할}로 바로 보내기~
function Movie03({ id, year, title, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">TITLE : {title}</h3>
        <h5 className="movie-year">YEAR : {year}</h5>
        <p className="movie-summary">SUMMARY : {summary}</p>
        <hr />
      </div>
    </div>
  );
}

Movie03.propTypes = {
//   id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie03;
