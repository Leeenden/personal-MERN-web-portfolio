const Project = require("./projectModel");
// add movie by title, actors[]
exports.addProject = async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(200).send({ project: newProject})
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};
// list all movies 
exports.listProjects =  async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).send(projects)
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};
// update project tech-stack by using project title 
exports.updateProject = async (req, res) => {
    try {
        //await model update one method
        const newUpdate = await Project.updateOne(
            { name: req.body.name },
            { $set: { status: req.body.status } }
        )
        res.status(200).send({ project: newUpdate })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};
// delete project by project name
exports.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.deleteOne({ name: req.body.name });
        res.status(200).send({ project: deletedProject })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};