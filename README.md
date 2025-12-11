# Cypress Automation Project - Saucedemo

[![Cypress Tests](https://github.com/nachoguzman79/cypress-demo01/actions/workflows/cypress.yml/badge.svg)](https://github.com/nachoguzman79/cypress-demo01/actions/workflows/cypress.yml)


This project demonstrates **end-to-end (E2E) test automation** using **Cypress**, focused on login flows.  


🌟 Features

+ End-to-end login automation

+ POM (Page Object Model) structure

+ Ready for CI/CD execution

🧪 Test Scenarios

+ Login with valid credentials → user is redirected to inventory page

+ Login with invalid credentials → error message is displayed

+ Logout → user is redirected to login page

## 📁 Project Structure

├── cypress
│   ├── e2e
│   │   └── login.cy.js
│   ├── pages
│   │   ├── InventoryPage.js
│   │   └── LoginPage.js
│   └── support
│       └── e2e.js
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