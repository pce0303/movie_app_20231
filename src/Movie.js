import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, year, summary, poster }) {
    return <h14>{title}</h14>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;