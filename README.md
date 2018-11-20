# Oferta del dia

Playing with React, Firebase and friends.

## 👾🤖🚀 Clone, install... GO 🚀🤖👾

```
❯ git clone git@github.com:davidgchaves/oferta-del-dia.git
❯ cd oferta-del-dia
❯ npm install
```

## 0. Installation and First Steps

### How to install Node

Since we are using [fish shell](https://fishshell.com/), we need to:

1. Install [NVM](https://github.com/creationix/nvm)

```
❯ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

2. Install [fish-nvm](https://github.com/FabioAntunes/fish-nvm)

```
❯ fisher add FabioAntunes/fish-nvm
```

3. Install [Node 8](https://nodejs.org/en/) with NVM

```
❯ nvm install 8
❯ node --version
v8.12.0
❯ nvm alias default 8.12.0
```

### How can I sync the project with a remote GitHub repository

```
❯ git remote add origin git@github.com:davidgchaves/oferta-del-dia.git
❯ git push -u origin master
```

### More tools

- [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) extension for Firefox.
- [CMDer](http://cmder.net/): Command Line Emulator for Windows.
- [Create React App 2](https://github.com/facebook/create-react-app)

### Troubleshooting

Try

```
❯ rm -rf node_modules/
❯ rm -rf package-lock.json
❯ npm install
❯ npm start
```

## 1. Intro to React

- Everything in react is a component!
- A component is a reusable piece of code.
- Webpack is a bundler.

### How to declare a component

Both are equivalent

```jsx
class Dave extends React.Component {
  render() {
    return <p>What do you think you are doing, Dave?</p>;
  }
}
```

```jsx
const Dave = () => {
  return <p>What do you think you are doing, Dave?</p>;
};
```

### Component structure

```jsx
// IMPORTS
import React from "react";

// COMPONENT
class Dave extends React.Component {
  render() {
    return <p>What do you think you are doing, Dave?</p>;
  }
}

// EXPORT
export default Dave;
```

### To JSX or to not JSX...

#### With only one tag

Both are equivalent

```jsx
<p>What do you think you are doing, Dave?</p>
```

```js
React.createElement("p", {}, "What do you think you are doing, Dave?");
```

#### With nested tags

Both are equivalent

```jsx
<div>
  <p>What do you think you are doing, Dave?</p>
</div>
```

```js
React.createElement(
  "div",
  {},
  React.createElement("p", {}, "What do you think you are doing, Dave?")
);
```

### JSX Gotchas!

#### Use `className` instead of `class`

```jsx
return <p className="my-class">What do you think you are doing, Dave?</p>;
```

#### Beware ASI (Automatic Semicolon Insertion)

If you leave `return` alone in one line a semicolon is automatically inserted! Use `return ( .... )`.

```jsx
return (
  <div>
    <p className="my-class">What do you think you are doing, Dave?</p>
  </div>
);
```

## 2. `props` and `state`

- `state`: where the data lives.
- `props`: a way to get data (`state`) into a component.

## 3. Functional Stateless Components

Five of them are equivalent

```jsx
class Header extends React.Component {
  render() {
    return (
      <h3 className="tagline">
        <span>{this.props.tagline}</span>
      </h3>
    );
  }
}
```

```jsx
const Header = props => {
  return (
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  );
```
