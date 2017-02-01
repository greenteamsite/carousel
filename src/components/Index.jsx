import React, { PropTypes } from 'react';

import Carousel from './CarouselContainer';

import { CAROUSEL_ITEM } from '../const/propTypes';

function Index(props) {
  const baseClass = 'index-component';
  return (
    <div className={baseClass}>
      <img alt="logo" src="../images/logo.png" />
      <Carousel items={props.caruselItems} />
    </div>
  );
}

Index.propTypes = {
  caruselItems: PropTypes.arrayOf(PropTypes.shape(CAROUSEL_ITEM)).isRequired,
};

export default Index;
