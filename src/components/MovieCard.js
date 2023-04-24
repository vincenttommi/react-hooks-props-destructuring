import React from "react";

//child compoment

function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.posterSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(", ")}</small>
    </div>
  );
}
export default MovieCard;
