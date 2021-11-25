This repo aims at reproducing the issue of getting Cypress + Cucumber plugin to work with Typescript baseUrl.

- tsconfig.json defines baseUrl at "./src"
- cypress/plugins/index.js configures cucumber preprocessor for typescript as proposed in https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#typeScript-support
- when trying to import a file in cypress/integration/test/test.steps.ts 
```
import {findStr} from 'utils/string';
```
this is not recognized by cucumber preprocessor, but works if using Cypress without cucumber.

To reproduce the issue, run "yarn cypress" and then select the "test.feature" file.

Error is:
```
Error: Can't walk dependency graph: Cannot find module 'utils/string' from 'cypress-cucumber-ts-baseurl/cypress/integration/test/test.steps.ts'
```
