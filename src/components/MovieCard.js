import React from "react";

//child compoment

function MovieCard({title,posterSrc,genres}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}
export default MovieCard;
