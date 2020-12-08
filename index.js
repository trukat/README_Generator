const inquirer= require('inquirer')

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
        name: "Project Name",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "Project Description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "Commands",
        message: "What commands should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "Usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about contributing to the repo?"
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
    console.log(JSON.stringify(answers, null, '  '));
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });