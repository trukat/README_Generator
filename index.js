const inquirer= require('inquirer');
const fs= require('fs');
const path= require('path')

const questions= [
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What commands should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this application used?"
    },
    {
        type: "input",
        name: "contributors",
        message: "List all contributors to this project."
    },
    {
      type: "input",
      name: "testing",
      message: "Is there a specific way to test this app?"
  },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL", "BSD", "none"]
    },
  ]

inquirer
  .prompt(questions)
  .then(answers => {

    writeToFile("generateREADME.md", generateMarkdown({...answers}))
  })

  .catch(error => {
    if(error.isTtyError) {
    } else {
 
    }
  });

  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

  function generateMarkdown(data){
    return `# ${data.projectName}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
 
  ## Table of Contents
  1. [Description](#projectDescription)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributors](#contributors)
  5. [Testing](#testing)
  6. [License](#license)
  7. [Questions](#questions)

  ## Description 
  ${data.projectDescription}
    
  ## Installation
    
  In order to install the necessary dependencies run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Testing
  ${data.testing}

  ## License
  ${data.license}

  ## Questions
  For questions about this application, please contact me at: ${data.Email}

  GitHub Profile: [${data.Github}](https://github.com/${data.Github}/)
    `;
  }