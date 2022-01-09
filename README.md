# Web Calculator

This project demonstrates how to use Cypress out of the box to test an ASP.NET Core MVC project.

### Requirements

1. dotnet core V6: [install](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
2. Node and NPM: [install](https://nodejs.org/en/).

### To run the tests...

1. Run the ASP.NET Core MVC app first: start a new Terminal (or PowerShell or Command Line window), `cd` to the `WebCalc` project, run `dotnet build` followed by `dotnet run`.  The app should be accessible at [https://localhost:7241](https://localhost:7241).

2. Run the Cypress tests: start another Terminal, `cd` to the `WebCalcCypress` project, run `npm install` (this may take several minutes), then run `npm run cy:run`.  This will run all the tests and print out the pass/fail results in the Terminal window.  Alternatively, you can open Cypress itself and run the tests manually with `npm run cy:open`.
