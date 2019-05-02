import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column-reverse",
    height: "20em",
    width: "100%"
  },
  image: {
    border: "1px solid white",
    borderRadius: "50%",
    width: "4em",
    height: "auto",
    marginTop: "6em"
  }
};
const Header = () => (
  <div style={styles.container}>
    <h1> تالار خاطرات بلووک</h1>
    <a href="http://bloock.ir">
      <LazyLoadImage
        style={styles.image}
        alt="bloock-logo"
        effect="blur"
        //   height={290}
        src={process.env.PUBLIC_URL + "/images/logo.png"} // use normal <img> attributes as props
        //   width={290}
      />
    </a>
  </div>
);
export default Header;
