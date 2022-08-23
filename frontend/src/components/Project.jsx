import React from 'react';

const Project = ({project}) => {
  
  return (
    <div id={`${project._id}`} key={`${project.description}`} className="w-[425px] h-[300px] flex flex-wrap p-2 m-2 text-white w[550] h[550] border-2 border-white">
        <h1 className="w-[300px] text-xl font-bold">{project.name}</h1>
        <p className="w-[100px] justify-center">{project.status}</p>
        {/*  method mapping */}
        <div className="w-[400px] flex justify-center">{project.method.map((type) => (
          <ul className="w-[400px] flex justify-center">
            <li>{type}</li>
          </ul>
        ))}</div>
        {/* techStack mapping */}
        <div className="w-[400px] flex justify-center">{project.techStack.map((tech) => (
          <ul className="w-[400px] flex justify-center">
            <li>{tech}</li>
          </ul>
        ))}</div>
        {/* buttons */}
        <div className="w-[425px] flex justify-center">
          <a 
            href={project.repoLink}
            target="_blank"
            rel="noreferrer">
              <button 
                className="mr-3 w-[175px] border bg-gray-300 text-black border-gray-300 ml-3 py-2 px-5 rounded cursor-pointer">
                  View Github
              </button>
          </a>
          <a 
            href={project.hostedLink}
            target="_blank"
            rel="noreferrer">
              <button 
                className="mr-3 w-[175px] border text-white border-gray-300 py-2 px-5 ml-4 rounded cursor-pointer">
                  View Site
              </button>
          </a>
        </div>
        
    </div>
  )
}

export default Project;