import Title from "../Title/Title";
import Description from "../Description/Description";
import Rating from "../Rating/Rating";
import Images from "../Images/Images";

function Movies() {
  const peliculas = [
    {
      title: "El lobo de wall street",
      description: "muy buena",
      rating: "5*",
      image: "../Images/peli1.jpeg",
    },
    {
      title: "Armagedon",
      description: "muy buena",
      rating: "5*",
      image: "../Images/peli2.jpeg",
    },
    {
      title: "Space Jump",
      description: "mala",
      rating: "2*",
      image: "../Images/peli3.jpeg",
    },
    {
      title: "El padre de la novia",
      description: "malísima",
      rating: "2*",
      image: "../Images/peli4.jpeg",
    },
  ];
  return peliculas.map((pelicula, index) => {
    return (
      <div className="pelicula_area">
        <Title param1={pelicula.title} />
        <ul>
          <Description param1={pelicula.description} />
          <Rating param1={pelicula.rating} />
        </ul>
      </div>
    );
  });
}
export default Movies;
