const fs = require("fs");
//const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = async () => {
  try {
    const answers = await inquirer.prompt([
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
        message: "What are the installation instructions for your project?",
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
        choices: [
          "Apache License 2.0",
          "GNU General Public License",
          "MIT License",
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
        message: "Please list which tests users can run on your project",
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
    const answers = await questions();
    const readmeText = generateMarkdown(answers);
    console.log("Your README file is being generated...");
    await writeFileAsync("README.md", readmeText);
    console.log("Your README file is now ready! Open on the left to view it");
  } catch (error) {
    console.error(error);
  }
}

// function call to initialize program
init();
