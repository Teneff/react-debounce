import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';

import Debounce from '.';

jest.useFakeTimers();
let wrapper;
beforeAll(() => {
  wrapper = document.createElement('div');
});

describe('<Debounce />', () => {
  const callback = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('without delay', () => {
    beforeAll(() => {
      ReactDOM.render(
        <Debounce callback={callback}>
          {debounced => (
            <button
              type="button"
              onClick={debounced}
            >
                click me
            </button>
          )}
        </Debounce>,
        wrapper,
      );
    });

    it('should render it`s childrend function', () => {
      const button = wrapper.querySelector('button');
      Simulate.click(button);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      jest.runAllTimers();
      expect(callback).toHaveBeenCalledWith(expect.objectContaining({
        type: 'click',
        target: expect.any(Object),
      }));
    });
  });

  describe('when unmounted', () => {
    beforeAll(() => {
      ReactDOM.render(
        <Debounce callback={callback}>
          {() => <span />}
        </Debounce>,
        wrapper,
      );
    });

    it('should not throw errors', () => {
      expect(() => ReactDOM.unmountComponentAtNode(wrapper)).not.toThrow();
    });
  });

  describe('with delay', () => {
    beforeAll(() => {
      ReactDOM.render(
        <Debounce callback={callback} delay={500}>
          {debounced => (
            <button
              type="button"
              onClick={debounced}
            >
                click me
            </button>
          )}
        </Debounce>,
        wrapper,
      );
    });

    describe('when button has been clicked multiple times', () => {
      it('should trigger the callback only once', () => {
        const button = wrapper.querySelector('button');
        Simulate.click(button);
        Simulate.click(button);
        Simulate.click(button);
        Simulate.click(button);
        Simulate.click(button);
        expect(setTimeout).toHaveBeenCalledTimes(5);
        jest.runAllTimers();
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(expect.objectContaining({
          type: 'click',
          target: expect.any(Object),
        }));
      });
    });
  });

  describe('when button is clicked and unmounted', () => {
    beforeAll(() => {
      ReactDOM.render(
        <Debounce callback={callback} delay={500}>
          {debounced => (
            <button
              type="button"
              onClick={debounced}
            >
                click me
            </button>
          )}
        </Debounce>,
        wrapper,
      );
    });

    it('it should clear the timeout and should not call the callback', () => {
      const button = wrapper.querySelector('button');
      Simulate.click(button);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      ReactDOM.unmountComponentAtNode(wrapper);
      jest.runAllTimers();
      expect(clearTimeout).toHaveBeenCalled();
      expect(callback).not.toHaveBeenCalled();
    });
  });
});
