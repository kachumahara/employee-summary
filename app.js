const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const teamMembers = [];
// Write code to use inquirer to gather information about the development team members,
function initialPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: " What type of team would like to add?",
        name: "profession",
        choices: ["manager", "engineer", "intern", "exit application"]
      }
    ])
    // and to create objects for each team member (using the correct classes as blueprints!)
    .then(function(response) {
      switch (response.profession) {
        case "manager":
          addManager();
          break;
        case "engineer":
          addEngineer();
          break;
        case "intern":
          addIntern();
          break;
        default:
          exitApplication();
      }
    });
};
// creating maanager's information
initialPrompt();
function addManager() {
    inquirer
    .prompt([
        {
        type: "input",
        message: "Enter your name",
        name: "name"
    },
    {
      type: "input",
      message: "Enter your id?",
      name: "id"

    },
    {
       type: "input",
       message: " Enter your office number",
       name: "officeId"
    },
    {
      type: "input",
      message: "Enter your email",
      name: "email"      
    },    
])
.then(function(res){
  var manager = new Manager(res.name, res.id, res.officeId, res.email);
  teamMembers.push(manager);
  initialPrompt();
})
}
// Adding Engineer's information
function addEngineer(){
  inquirer
  .prompt([
  {
    type: "input",
    message: "Enter your name",
    name: "name"
  },
  {
    type: "input",
    message: "Enter your id",
    name: "id"
  },
  {
    type: "input",
    message: "Enter your email",
    name: "email"
  },
{
  type: "input",
  message: "Enter your github username",
  name: "githubUsername"
},
])
.then(function(res){
  var engineer = new Engineer(res.name, res.id, res.email, res.githubUsername);
  teamMembers.push(engineer);
  initialPrompt();
})
}
// adding intern information
function addIntern(){
  inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your name",
      name: "name"
    },
    {
      type: "input",
      message: "Enter your id",
      name: "id"
    },
    {
      type: "input",
      message: "Enter your email",
      name: "email"
    },
    {
      type: "input",
      message: "Name of your school",
      name: "schoolName"
    },
])
.then(function(res){
  var intern = new Intern(res.name, res.id, res.email, res.schoolName);
  teamMembers.push(intern);
  initialPrompt();
})
}

/// rendering the new team members to output path (team.html)
function exitApplication() {
  var page = render(teamMembers);
  fs.writeFile(outputPath, page, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success")
  });
}
