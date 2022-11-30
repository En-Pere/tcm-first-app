import Movies from "../movies/movies";

function Movieslist(movies) {

  movies.map(element => {
    return (
      <ul>
        <li>element.title</li>
        <li>element.description</li>
        <li>element.rating</li>
      </ul>
      )
  }

export default Movieslist;