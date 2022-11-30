function Images({ param1 }) {
  return (
    <img src={require(param1)} alt="cartel">
      Imagen
    </img>
    
  );
}

export default Images;

// function Rating({ param1 }) {
//   return <li>Rating: {param1}</li>;
// }
// export default Rating;
