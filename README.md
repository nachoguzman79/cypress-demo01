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

├── cypress
│   ├── e2e
│   │   └── login.cy.js
│   ├── pages
│   │   ├── InventoryPage.js
│   │   └── LoginPage.js
│   ├── screenshots
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
│   └── videos
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md

## ▶️ Installation

Install dependencies: npm install

## ▶️ Running Tests

- Open Cypress Test Runner (interactive mode): npx cypress open


- Run tests headlessly (CLI): npx cypress run

## 🤖 Continuous Integration (GitHub Actions)
- This repository includes an automated workflow located at: .github/workflows/cypress.yml

## The workflow:

+ Runs on every push or pull request to main

+ Installs Node.js 18

+ Installs project dependencies

+ Executes Cypress tests in headless mode

+ Shows results directly in the GitHub Actions tab

+ No manual execution is required — tests run automatically on GitHub.



🌐 Website Under Test: https://www.saucedemo.com/
A public demo site used for QA and automation practice

👤 Author: Ignacio Guzman