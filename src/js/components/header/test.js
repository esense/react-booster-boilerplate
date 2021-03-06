import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';
import {assert}        from 'chai';

import HeaderComponent from './index';

describe('Component: Header', () => {

  let rendered;

  beforeEach(() => {
    rendered = TestUtils.renderIntoDocument(<HeaderComponent />);
  });

  it('should render with the correct class', () => {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'header-component');
  });

  it('should render with the correct text content', () => {
    const node = ReactDOM.findDOMNode(rendered);

    assert(node.textContent === 'Header');
  });

});
