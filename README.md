# React &lt;Debounce /&gt; Component
Using render props to debounce a callback. Useful for preventing multiple callback executions on scroll, spam-clicking, typing etc. 

[![NPM version][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![GitHub issues][issues-image]][issues-url]
[![GitHub stars][github-stars-img]][github-stars-url]
[![Slack][slack-image]][slack-url]


## Install

- using npm
```
npm install @teneff/react-debounce
```

- using yarn
```
yarn add @teneff/react-debounce
```

## Live Demo
[![codesandbox-img]][codesandbox-url]

## Usage

```jsx
import Debounce from '@teneff/react-debounce';

class MyComponent extends React.Component {
  handleClick = () => {
    console.info("event handler will be executed once after multiple clicks");
  };

  handleKeyUp = value => {
    console.info("event handler will be executed when you stop typing", value);
  };

  render() {
    return (
      <div>
        <Debounce callback={this.handleClick} delay={300}>
          {onClick => <button onClick={onClick}>click me, wait, profit</button>}
        </Debounce>
        <Debounce callback={this.handleKeyUp} delay={500}>
          {onKeyUp => (
            <input
              type="text"
              onKeyUp={e => onKeyUp(e.target.value)}
              placeholder="Start typing..."
            />
          )}
        </Debounce>
      </div>
    );
  }
}
```

[npm-img]: https://img.shields.io/npm/v/@teneff/react-debounce.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/@teneff/react-debounce

[build-img]: https://img.shields.io/travis/com/Teneff/react-debounce.svg?logo=travis
[build-url]: https://travis-ci.com/Teneff/react-debounce

[coverage-image]: https://img.shields.io/coveralls/github/Teneff/react-debounce.svg
[coverage-url]: https://coveralls.io/github/Teneff/react-debounce

[slack-image]: https://img.shields.io/badge/%23react--debounce-ff69b4.svg?logo=slack&label=slack
[slack-url]: https://dip-in-milk.slack.com/messages/CFASVNPCG

[issues-image]: https://img.shields.io/github/issues/teneff/react-debounce.svg?logo=github&logoColor=fff
[issues-url]: https://github.com/teneff/react-debounce/issues

[github-stars-img]: https://img.shields.io/github/stars/teneff/react-debounce.svg?logo=github&logoColor=fff
[github-stars-url]: https://github.com/teneff/react-debounce/stargazers

[codesandbox-img]: https://codesandbox.io/static/img/play-codesandbox.svg
[codesandbox-url]: https://codesandbox.io/s/927l985x94 