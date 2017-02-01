import React, { PropTypes } from 'react';

import Carousel from './Carousel';

import { CAROUSEL_ITEM } from '../const/propTypes';

class CarouselContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onPrevClick = this.onPrevClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);

    this.state = { currentIndex: 0 };
  }

  onPrevClick() {
    if (this.state.currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    } else {
      this.setState({ currentIndex: this.props.items.length - 1 });
    }
  }

  onNextClick() {
    if (this.state.currentIndex < this.props.items.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    } else {
      this.setState({ currentIndex: 0 });
    }
  }

  render() {
    return (
      <Carousel
        {...this.props.items[this.state.currentIndex]}
        onPrevClick={this.onPrevClick}
        onNextClick={this.onNextClick}
      />
    );
  }

}

CarouselContainer.defaultProps = {
  items: [],
};

CarouselContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(CAROUSEL_ITEM)),
};

export default CarouselContainer;
