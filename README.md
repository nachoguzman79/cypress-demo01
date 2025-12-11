[![Cypress Tests](https://github.com/nachoguzman79/cypress-demo01/actions/workflows/cypress.yml/badge.svg)](https://github.com/nachoguzman79/cypress-demo01/actions/workflows/cypress.yml)

# Cypress Automation Project - Saucedemo

This project demonstrates **end-to-end (E2E) test automation** using **Cypress**, focused on login flows.  
It is designed as a professional portfolio project for QA Automation interviews.

## Features

- Successful login with valid credentials
- Handling login errors with invalid credentials
- Logout after successful login
- Clear structure, easy to read and maintain
- Ready to be run locally or in CI/CD pipelines

## 📁 Project Structure

cypress/
e2e/
login.cy.js # Main test file with robust login flow
fixtures/
support/
cypress.config.js
package.json
README.md


## ▶️ Installation

Install dependencies:

```bash
npm install

▶️ Running Tests

- Open Cypress Test Runner (interactive mode): npx cypress open


- Run tests headlessly (CLI): npx cypress run


🌐 Website Under Test: https://www.saucedemo.com/

👤 Author: Ignacio Guzman