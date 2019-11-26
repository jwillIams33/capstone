const imgGen = function(img) {
    let bg = {
      backgroundImage: "url(" + img + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
    return bg
  }

  export default imgGen

  // radial-gradient(rgba(19, 26, 44, 0.8), rgba(0, 0, 0, 0.6)),