import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';

import Debounce from '.';

describe('<Debounce />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = document.createElement('div');
  });

  describe('when mounted', () => {
    it('should render it`s childrend function', () => {
      const callback = jest.fn();
      ReactDOM.render(
        <Debounce callback={callback}>
          {debounced => (
            <button
              type="button"
              onClick={() => {
                debounced('hello');
              }}
            >
            click me
            </button>
          )}
        </Debounce>, wrapper,
      );

      const button = wrapper.querySelector('button');
      Simulate.click(button);
      button.click();
      // expect(wrapper.querySelector('button')).toEqual('asd');
      expect(callback).toHaveBeenCalledWith('hello');
    });
  });

  describe('when unmounted', () => {
    beforeAll(() => {
      ReactDOM.unmountComponentAtNode(wrapper);
    });
    it('renders without crashing', () => {

    });
  });
});
