# React Calculator Standard

A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions.

Features:

* Add
* Subtract
* Multiply
* Divide
* Toggle Sign
* Expression Builder
* History
  * Show complete history of entered expressions
  * Clear history
* Clear current value and expression
* Clear everything. Like _'Clear'_, but clears history as well

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration

**Screenshots:**

![react-calculator-standard-1](https://user-images.githubusercontent.com/33935506/34107653-c659c4de-e405-11e7-9da2-5b39a1a0068e.PNG)![react-calculator-standard-2](https://user-images.githubusercontent.com/33935506/34107654-c6880be6-e405-11e7-95fa-6794261125a9.PNG)![react-calculator-standard-3](https://user-images.githubusercontent.com/33935506/34107655-c6b5b384-e405-11e7-819d-55000ea41dc4.PNG)![react-calculator-standard-4](https://user-images.githubusercontent.com/33935506/34107656-c6e3abae-e405-11e7-9045-b0b251260e23.PNG)![react-calculator-standard-5](https://user-images.githubusercontent.com/33935506/34107657-c7182d2a-e405-11e7-829f-99b7eda5d7af.PNG)![react-calculator-standard-6](https://user-images.githubusercontent.com/33935506/34107658-c7ad3ec4-e405-11e7-8526-0920d54b80d8.PNG)

---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-calculator-standard'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-calculator-standard.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-calculator-standard.git
  ```

* Install node modules

   ```bash
   cd react-calculator-standard
   npm install
   ```

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-calculator-standard/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards