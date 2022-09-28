# Set up

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

## Commands

`npm test` : run tests

`npm run cover`: generate coverage report
