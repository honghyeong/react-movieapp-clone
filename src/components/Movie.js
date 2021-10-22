import React from "react";
import PropTypes, { string } from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `movie/${id}`,
        state: {
          id,
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div>
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__sumamry">{summary}</p>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(string).isRequired,
};

export default Movie;
