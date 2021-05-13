const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  "What is the title of this project?",
  "Write a brief description of the application:",
  "Write any Applicable Installation Instructions:",
  "Once Installed, How is the Application Used?",
  "Under What License Is the Application Offered?",
  "List Any Contributors To This Project",
  "Describe Any Applicable Test Proecedures:",
  "What E-Mail Should Be Included for Questions?",
];

function writeToFile() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "inputName",
      },
      {
        type: "input",
        message: questions[1],
        name: "desc",
      },
      {
        type: "input",
        message: questions[2],
        name: "install",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "list",
        message: questions[4],
        choices: ["MIT", "Apache", "GNU"],
        name: "licenseID",
      },
      {
        type: "input",
        message: questions[5],
        name: "contrib",
      },
      {
        type: "input",
        message: questions[6],
        name: "test",
      },
      {
        type: "input",
        message: questions[7],
        name: "email",
      },
    ])
    .then((response) => {
      const htmlSkeleton = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
              crossorigin="anonymous"
            />
          </head>
          <body>
            <title>Project Readme</title>
            <div class="jumbotron bg-secondary">
              <h1 class="display-4 text-center text-white" id="project-title">
                ${response.inputName}
              </h1>
              <hr class="my-4" />
            </div>
            <div class="container border border-dark">
              <div class="row border border-dark">
                <h2>Description</h2>
                <p id="description-text">${response.desc}</p>
              </div>
              <div class="row border border-dark">
                <h2>Table of Contents</h2>
                <ol class="m-2">
                  <li><a href="#installation">Installation</a></li>
                  <li><a href="#usage">Usage</a></li>
                  <li><a href="#license">License</a></li>
                  <li><a href="#contributing">Contributing</a></li>
                  <li><a href="#tests">Tests</a></li>
                  <li><a href="#questions">Questions</a></li>
                </ol>
              </div>
              <div class="row border border-dark">
                <h2 id="installation">Installation</h2>
                <p id="installation-text">${response.install}</p>
              </div>
              <div class="row border border-dark">
                <h2 id="usage">Usage</h2>
                <p id="usage-text">${response.usage}</p>
              </div>
              <div class="row border border-dark">
                <h2 id="license">License</h2>
                <p id="license-text">Offered Under the ${response.licenseID} License</p>
              </div>
              <div class="row border border-dark">
                <h2 id="contributing">Contributing</h2>
                <p id="contributing-text">${response.contrib}</p>
              </div>
              <div class="row border border-dark">
                <h2 id="tests">Testing</h2>
                <p id="test-text">${response.test}</p>
              </div>
              <div class="row border border-dark">
                <h2 id="questions">Questions</h2>
                <p id="questions-text">Contact Me Here with Questions!</p>
                <p id="email">${response.email}</p>
                <a href="https://github.com/GiantRobot76">My GitHub Page</a>
              </div>
            </div>
          </body>
        </html>`;
      fs.writeFile("index.html", htmlSkeleton, (err) =>
        err ? console.error(err) : console.log("File Created")
      );
    });
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

writeToFile();
