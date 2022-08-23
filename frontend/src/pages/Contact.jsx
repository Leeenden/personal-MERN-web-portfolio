import React from 'react';
import background from "../images/background.png";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
const Contact = () => {

    return (
        <>
        <div className="w-full h-screen ">
            <img className="hidden sm:block absolute w-full h-full object-cover" src ={background} alt="test"/>
            <div className="fixed w-full px-4 py-24 z-50 flex ">
                <div className="max-w-[450px] h-[600px] mx-auto bg-transparent text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold text-center"> LinkedIn</h1>
                        {' '}
                        <div className="w-full flex flex-col py-4 text-center justify-center items-center"> 
                            <AiFillLinkedin className="py-3 my-2 bg-transparent rounded flex justify-center" size={150} />
                            <a 
                                href="https://linkedin.com/in/linden-hamer-ba527312b" 
                                target="_blank"
                                rel="noreferrer" 
                                className="mr-3 w-[175px] border bg-gray-300 text-black border-gray-300 ml-3 py-2 px-5"
                                >
                                    <button> View profile</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="max-w-[450px] h-[600px] mx-auto bg-transparent text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold text-center"> GitHub </h1>
                        {' '}
                        <div className="w-full flex flex-col py-4 text-center justify-center items-center"> 
                            <AiFillGithub className="py-3 my-2 bg-transparent rounded flex justify-center" size={150} />
                            <a 
                                href="https://github.com/Leeenden" 
                                target="_blank"
                                rel="noreferrer"
                                className="mr-3 w-[175px] border bg-gray-300 text-black border-gray-300 ml-3 py-2 px-5"
                                >
                                    <button> View profile</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact