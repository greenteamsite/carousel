import React from 'react';

import Index from './Index';
import getItems from '../api/carouselApi';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { caruselItems: [] };
  }

  componentDidMount() {
    getItems().then((items) => {
      this.setState({ caruselItems: items });
    });
  }

  render() {
    return (
      <Index caruselItems={this.state.caruselItems} />
    );
  }

}

export default IndexContainer;
