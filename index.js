const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//writeFileAsync
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = async () => {
  try {
    await inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please add a description of your project",
      },
      {
        type: "input",
        name: "installation",
        message:
          "Fantastic. What are the installation instructions for your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "How should users use your project?",
      },
      {
        type: "list",
        name: "license",
        message: "Please select a license for your project",
        licenceOptions: [
          "Apache License 2.0",
          "GNU General Public License",
          "MIT license",
          "Boost Software License 1.0",
          "Mozilla Publice License 2.0",
          "None",
        ],
      },
      {
        type: "input",
        name: "contributing",
        message:
          "What are the guidelines for developers to contribute to your project?",
      },
      {
        type: "input",
        name: "tests",
        message:
          "Please add a short description of which tests users can run on your project",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "email",
        name: "email",
        message: "What is your email address so people can find out more?",
      },
    ]);
    return answers;
  } catch (error) {
    throw error;
  }
};

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  try {
    const responses = await questions();
    const readmeText = generateMarkdown(answers);
    console.log("Your README file is being generated...");
    await writeFileAsync("READMe.md, readmeText");
    console.log("Your READMe file is now ready! Open on the left to view it");
  } catch (error) {
    console.error(error);
  }
}

// function call to initialize program
init();
