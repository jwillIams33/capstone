const heroGen = function(img) {
    let bg = {
      backgroundImage: "radial-gradient(rgba(19, 26, 44, 0.6), rgba(0, 0, 0, 0.2)), url(" + img + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
    return bg
  }

  export default heroGen