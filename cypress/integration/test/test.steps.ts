import {findStr} from 'utils/string';
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I test my TS alias import',()=>{
    if (findStr('abc', 'efg')) {
        cy.get('Google')
    }
})

Then('I am happy',()=>{
    cy.log('ehllo')
})