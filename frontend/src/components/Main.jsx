import React, {useEffect, useState} from 'react';
import Project from './Project';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

const Main = ({rowID}) => {
    const [projectsMap, setProjectsMap] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [description, setDescription] = useState("");
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch(`${process.env.REACT_APP_REST_API}projects`);
            const json = await response.json();

            if(response.ok) {
                setProjectsMap(json);
                console.log(json);
            }
        }

        fetchProjects();
    }, [])

    const slideLeft = () => {
        let slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const handleMouseOver = (e) => {
        setIsHovering(true)
        let hoverId = e.nativeEvent.fromElement.id
        // eslint-disable-next-line
        projectsMap && projectsMap.map((project) => {if(hoverId === project._id) setDescription(project.description)})
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <div className = "w-full h-full flex justify-center">
            <div className="absolute top-[10%] h-[30%] w-full p-4 md:-8">
                <h1 className="text-3xl pb-8 md:text-5xl font-bold text-white">I'm a web-developer</h1>
                <div className="my-4">
                   
                </div>
                {/*  */}
                <h1 className="flex text-4xl w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200"> 
                    Projects
                </h1>
                
                {isHovering && <div className="text-white text-2xl">{description}</div>}
            </div>
            <div className="absolute top-[42.5%] w-full h-[400px] flex items-center content-center group cursor-pointer">
                <MdChevronLeft 
                onClick={slideLeft}
                    className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" 
                    size={40}
                />
                <div 
                    id={"slider" + rowID} 
                    className= "bg-transparent w-full h-[350px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ">
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="w-full h-[350px] flex">
                        {projectsMap && projectsMap.map((project) => (
                            <Project key={project._id} data={project.description} project={project}  />
                        ))}
                    </div>
                </div>
                <MdChevronRight 
                    onClick={slideRight}
                    className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" 
                    size={40}/>
            </div>
        </div>
    )
}

export default Main;