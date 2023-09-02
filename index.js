const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
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
      type: "input",
      name: "license",
      message: "What is the license for your project?",
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
      type: "input",
      name: "email",
      message: "What is your email address so people can find out more?",
    },
  ]);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
