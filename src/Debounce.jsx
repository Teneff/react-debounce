// @flow
import React from 'react';

type Props = {
  delay?: number,
  callback: (T) => void,
  children: (T) => React.Node,
}

export default class Debounce extends React.Component<Props> {
  static defaultProps = {
    delay: 0,
  };

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  createDebounced = (...args) => {
    const { callback, delay } = this.props;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => callback(...args), delay);
  };

  render(): React.Node {
    const { children } = this.props;
    return children(this.createDebounced);
  }
}
