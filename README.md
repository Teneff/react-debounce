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

## Usage

```jsx
import Debounce from '@teneff/react-debounce';

class MyComponent extends React.Component {

  handleClick = e => {
    console.info(e);
  }

  handleKeyUp = e => {
    console.info('event handler will be executed when you stop typing', e);
  }

  render() {
    return (
      <div>
        <Debounce callback={this.handleClick} delay={300}>
          {onClick => {
            <button onClick={onClick}>
              click me, wait, profit
            </button>
          }}
        </Debounce>
        <Debounce callback={this.handleKeyUp} delay={500}>
          {onKeyUp => {
            <input onKeyUp={onKeyUp} value="" placeholder="Start typing..." />
          }}
        </Debounce>
      </div>
    )
  }
}
```

[npm-img]: https://img.shields.io/npm/v/@teneff/react-debounce.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/@teneff/react-debounce

[build-img]: https://img.shields.io/travis/teneff/react-debounce/develop.svg?logo=travis
[build-url]: https://travis-ci.org/teneff/react-debounce

[coverage-image]: https://coveralls.io/repos/github/teneff/react-debounce/badge.svg?branch=develop
[coverage-url]: https://coveralls.io/github/teneff/react-debounce?branch=develop

[slack-image]: https://img.shields.io/badge/%23react--debounce-ff69b4.svg?logo=slack&label=slack
[slack-url]: https://dip-in-milk.slack.com/messages/CFASVNPCG

[issues-image]: https://img.shields.io/github/issues/teneff/react-debounce.svg?logo=github
[issues-url]: https://github.com/teneff/react-debounce/issues

[github-stars-img]: https://img.shields.io/github/stars/teneff/react-debounce.svg?logo=github
[github-stars-url]: https://github.com/teneff/react-debounce/stargazers