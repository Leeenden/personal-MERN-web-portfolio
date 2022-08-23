// require Router 
const { Router } = require("express");
// require CRUd fucntions form movieController file
const { addProject, listProjects, updateProject, deleteProject } = require("./projectController");
// assign Router fucntion to a variable
const projectRouter = Router();

// use http verb "post" to add data to db

// route for movie page and addign movie
projectRouter.post("/projects", addProject);
// route for lsiting users
projectRouter.get("/projects", listProjects);
// route for updating user
projectRouter.patch("/projects", updateProject);
// route for deleting user
projectRouter.delete("/projects", deleteProject);

// exports
module.exports = projectRouter;