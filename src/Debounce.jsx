// @flow
import React from 'react';

type Props = {
  /**
   * Milliseconds to delay the callback
   */
  delay?: number,
  /**
   * callback to be called once
   * the delay period is over
   */
  callback: (T) => void,
  children: (T) => React.Node,
}

export default class Debounce extends React.Component<Props> {
  static defaultProps = {
    delay: 0,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  createDebounced = (...args) => {
    const { callback, delay } = this.props;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => callback(...args), delay);
  };

  render(): React.Node {
    const { children } = this.props;
    return children(this.createDebounced);
  }
}
