import React from "react";
import PropTypes from 'prop-types';

// props 대신 {객체 분할}로 바로 보내기~
function Movie03({id, year, title, summary, poster}) {
    return <h1>{title}</h1>;
}

Movie03.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default Movie03;