# React &lt;Debounce /&gt; Component
Using render props to debounce a callback. Useful for preventing multiple callback executions on scroll, spam-clicking, typing etc. 

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