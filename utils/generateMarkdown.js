// function to generate markdown for README

//Adding the badge

function addLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return;
    `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "GNU General Public License") {
    return;
    `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "MIT License") {
    return;
    `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Boost Software License 1.0") {
    return;
    `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license === "Mozilla Publice License 2.0") {
    return;
    `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else {
    return "";
  }
}

//Adding the text answers
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
