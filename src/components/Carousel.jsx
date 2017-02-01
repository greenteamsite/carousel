import React, { PropTypes } from 'react';

function Carousel(props) {
  const baseClass = 'carousel-component';
  return (
    <div className={baseClass}>
      <button
        onClick={props.onPrevClick}
        className={`${baseClass}-left-button`}
      >
        {'<'}
      </button>
      <a href={`http://${props.link}`}>
        <img alt={props.title} className={`${baseClass}-img`} src={props.imageurl} />
      </a>
      <button
        onClick={props.onNextClick}
        className={`${baseClass}-right-button`}
      >
        {'>'}
      </button>
      <div className={`${baseClass}-text-box`}>
        {props.title}
        {props.synopsis}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  imageurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Carousel;
