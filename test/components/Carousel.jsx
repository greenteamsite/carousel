import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Carousel from '../../src/components/Carousel';

function setup() {
  const props = {
    imageurl: 'images/bike.png',
    title: 'A Guy On A Bike',
    synopsis: 'Lorem ipsum dolor sit amet',
    link: 'www.good.com',
    onPrevClick: sinon.spy(),
    onNextClick: sinon.spy(),
  };

  const mockedComponent = shallow(<Carousel {...props} />);
  const renderedComponent = mount(<Carousel {...props} />);

  return {
    props,
    mockedComponent,
    renderedComponent,
  };
}

describe('<Carousel />', () => {
  it('should render self with class', () => {
    const { mockedComponent } = setup();
    expect(mockedComponent.find('div').first().hasClass('carousel-component')).to.equal(true);
  });

  it('should contains button with class carousel-component-left-button', () => {
    const { mockedComponent } = setup();
    expect(mockedComponent.find('button').first().hasClass('carousel-component-left-button')).to.equal(true);
  });

  it('should contains button with class carousel-component-right-button', () => {
    const { mockedComponent } = setup();
    expect(mockedComponent.find('button').last().hasClass('carousel-component-right-button')).to.equal(true);
  });

  it('should contains img with class carousel-component-img', () => {
    const { mockedComponent } = setup();
    expect(mockedComponent.find('img').first().hasClass('carousel-component-img')).to.equal(true);
  });

  it('should call onPrevClick when click on first button', () => {
    const { props, renderedComponent } = setup();

    renderedComponent.find('button').first().simulate('click');
    expect(props.onPrevClick.called).to.equal(true);
  });

  it('should call onNextClick when click on last button', () => {
    const { props, renderedComponent } = setup();

    renderedComponent.find('button').last().simulate('click');
    expect(props.onNextClick.called).to.equal(true);
  });
});
