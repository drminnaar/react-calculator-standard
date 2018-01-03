# React Calculator Standard

A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions.

Go **[here](http://react-calculator-standard.drminnaar.me/)** for live demo.

The application is composed of the following components:

* Header - A heading that displays application title

* Calculator - The primary (root) component for managing all Calculator and underlying component state.

* Display - Displays the calculator input, expression, and history

* History - Displays a list of previously run operations

* ControlPanel - Used to manage calculator interactions that don't relate to calculation operations. For example, it provides functionality to toggle history open and closed

* Keypad - Used to input operands as well as execute various operations against those operands

Component Diagram
![Component Diagram](https://user-images.githubusercontent.com/33935506/34460958-8130a58c-ee26-11e7-8e93-fac23dc17d7f.png)

The application makes use of the following domain services:

* CalculatorEngine - A domain service that encapsulates calculator logic

Domain Service Diagram
![Domain Service Diagram](https://user-images.githubusercontent.com/33935506/34460977-173787e4-ee27-11e7-8655-0223a92a315d.png)

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

... | ...
--- | ---
![](https://user-images.githubusercontent.com/33935506/34107653-c659c4de-e405-11e7-9da2-5b39a1a0068e.PNG) | ![](https://user-images.githubusercontent.com/33935506/34107654-c6880be6-e405-11e7-95fa-6794261125a9.PNG)
![](https://user-images.githubusercontent.com/33935506/34107655-c6b5b384-e405-11e7-819d-55000ea41dc4.PNG) | ![](https://user-images.githubusercontent.com/33935506/34107656-c6e3abae-e405-11e7-9045-b0b251260e23.PNG)
![](https://user-images.githubusercontent.com/33935506/34107657-c7182d2a-e405-11e7-829f-99b7eda5d7af.PNG) | ![](https://user-images.githubusercontent.com/33935506/34107658-c7ad3ec4-e405-11e7-8526-0920d54b80d8.PNG)

---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Surge] - Static web publishing for Front-End Developers

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

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

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

[Surge]: https://surge.sh/
[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard