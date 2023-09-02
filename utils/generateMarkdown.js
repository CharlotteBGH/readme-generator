// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${addLicenseBadge(answers.license)}

  ## Description 

  ${answers.description}

  ## Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation 

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## License

  ${answers.license}

  ## Contributing 

  ${answers.contributing}

  ## Tests

  ${answers.tests}

  ## Questions

  If you have any questions or would like to find out more, you can reach me on: 
  GitHub: [${answers.github}](https://github.com/${answers.github})
  Email: [${answers.email}](mailto:${answers.email})

`;
}

module.exports = generateMarkdown;
