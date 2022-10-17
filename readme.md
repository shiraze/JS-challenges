# How this repository was created

Initialise repository to create an "npm package"; Avoid creation questionnaire:

```
npm init --yes
```

Include Jest for TDD

```
npm install --save-dev jest
```

Install babel to allow ES6 syntax

```
npm install --save-dev @babel/preset-env @babel/core @babel/cli
```

VS Code workspace settings saved in repository - to make sure files are always correctly formatted.

## Contents

The `AvailableBooks` and `Movies` directories show contain some sample classes and tests

## Commands

`npm install` : install necessary packages

`npm test` : run tests, in watch mode

`npm run ci-test` : run all tests and stop; suitable for CI

`npm run cover` : generate coverage report
