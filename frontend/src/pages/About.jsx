import React from 'react';
import background from "../images/background.png";
import CV from "../utils/CV.pdf"
const About = () => {
  return (
    <div>
      <img className="hidden sm:block absolute w-full h-full object-cover" src ={background} alt="test"/>
      <div className="absolute flex flex-col justify-center items-center w-full h-[80%] p-4 md:-8 ">
        <h1 className="text-3xl md:text-5xl font-bold text-white">About me</h1>
        <div className="my-4">
          <a href={CV} target="_blank" rel="noreferrer">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5"> 
              View CV online
            </button>
          </a>
          <a href="mailto: linden.hamer.97@hotmail.co.uk">
          <button className="border text-white border-gray-300 py-2 px-5 ml-4"> 
            Send me an email 
          </button>
          </a>
          
        </div>
        <div className="text-white flex flex-col mb-8 ">
          <h1 className="flex text-4xl w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mb-4"> 
            Bio
          </h1>
          <p className="text-xl"> Aspiring Junior Software developer. I hold BSc and MSc degree's in Sport Science, however I'm extremely passionate aboout web development (full-stack, front-end or back-end). Some of my hobbies include: gym / health and fitness, video-gaming, coding, reading/research.</p>
        </div>
        <div className="text-white flex flex-col mb-8 w-full">
          <h1 className="flex text-4xl w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mb-4"> Experience </h1>
          <h4 className="flex text-3xl w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mb-4"> Junior Developer </h4>
          <p className="text-xl" > 15-Weeks as a Junior Developer with Code Nation during their 3-Week Develop coding course and their 12-Week Master's coding course.</p>
          <p className="text-xl" > I developed the skills neccessary to build full-stack web applications using the MERN stack. As well the skills specifically for just front-end or back-end aspects during group work.</p>
          <p className="text-xl" > I developed strong team-work and collaborative skills using Discord, Slack, git and GitHub branching.</p>
        </div>
      </div>
    </div>
  )
}

export default About