import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { animated, interpolate } from "react-spring/hooks";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, age, role, text, image } = data[i];

    return (
      <animated.div
        className="card-wide-container "
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          className="card-container "
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <LazyLoadImage
              alt="profilePicture"
              effect="blur"
              // height={image.height}
              src={process.env.PUBLIC_URL + "/images/" + image} // use normal <img> attributes as props
              width={290}
            />
            <h2>{name}</h2>
            <h5>{role}</h5>
            <h5>{text}</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  age: PropTypes.number,
  role: PropTypes.string,
  text: PropTypes.string
};

export default Card;
