import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Carousel from '../../src/components/Carousel';
import CarouselContainer from '../../src/components/CarouselContainer';

function setup() {
  const props = {
    items: [
      {
        imageurl: 'images/bike.png',
        title: 'A Guy On A Bike',
        synopsis: 'Lorem ipsum dolor sit amet',
        link: 'www.good.com',
      },
      {
        imageurl: 'images/library.png',
        title: 'Books And Stuff',
        synopsis: 'Sed ut perspiciatis unde omnis',
        link: 'www.bad.com',
      },
    ],
  };

  const mockedComponent = shallow(<CarouselContainer {...props} />);
  const renderedComponent = mount(<CarouselContainer {...props} />);

  return {
    props,
    mockedComponent,
    renderedComponent,
  };
}

describe('<CarouselContainer />', () => {
  it('should contain Carousel component', () => {
    const { mockedComponent } = setup();
    expect(mockedComponent.find(Carousel)).to.have.length(1);
  });

  it('should has default state { currentIndex: 0 }', () => {
    const { mockedComponent } = setup();
    expect(mockedComponent.state()).to.deep.equal({ currentIndex: 0 });
  });

  it('call onPrevClick, should has currentIndex = 1', () => {
    const { renderedComponent } = setup();
    renderedComponent.instance().onPrevClick();
    expect(renderedComponent.state().currentIndex).to.equal(1);
  });


  it('call onNextClick, should has currentIndex = 1', () => {
    const { renderedComponent } = setup();
    renderedComponent.instance().onNextClick();
    expect(renderedComponent.state().currentIndex).to.equal(1);
  });

  it('call onPrevClick twice, should has currentIndex = 0', () => {
    const { renderedComponent } = setup();
    renderedComponent.instance().onPrevClick();
    renderedComponent.instance().onPrevClick();
    expect(renderedComponent.state().currentIndex).to.equal(0);
  });

  it('call onNextClick twice, should has currentIndex = 0', () => {
    const { renderedComponent } = setup();
    renderedComponent.instance().onNextClick();
    renderedComponent.instance().onNextClick();
    expect(renderedComponent.state().currentIndex).to.equal(0);
  });
});
