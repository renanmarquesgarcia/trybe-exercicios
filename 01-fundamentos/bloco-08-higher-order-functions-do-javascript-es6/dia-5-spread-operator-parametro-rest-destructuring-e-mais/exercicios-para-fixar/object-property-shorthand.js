// Altere a função getPosition utilizando a property shorthand.
// Antes
// const getPosition = (latitude, longitude) => ({
//     latitude: latitude,
//     longitude: longitude,
//   });
  
//   console.log(getPosition(-19.8157, -43.9542));

  // Depois

  const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));