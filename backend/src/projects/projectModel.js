const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema ({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    method: [
      {
      type: String,
      }
    ],
    status: {
      type: String,
      required: true,
    },
    repoLink: {
        type: String,
        required: true,
        unique: true,
    },
    hostedLink: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    techStack: [
        {
            type: String,
            required: true,
        },
    ]
  });
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;