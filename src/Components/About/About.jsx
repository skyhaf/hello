import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import { Tooltip } from "@chakra-ui/react"

const About = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center pt-48" id="About">
        <div className="flex justify-center w-full py-60" id="AboutMe">
          <div className="flex flex-col space-y-6 w-1/2 pb-8">
            <h1 className="font-head-border text-5xl text-primary text-center tracking-wide">
              ABOUT ME
            </h1>
            <p className="text-justify font-primary text-primary font-semibold text-2xl tracking-wide">
              Hello, my name is <a href="https://www.linkedin.com/in/hafizbhadrikaalamsyah/" target="_blank" className="hover:text-secondary hover:underline"> Hafiz Bhadrika Alamsyah</a>. People call me habe.
              Currently, i am pursuing a Computer Science degree at <a href="https://www.ui.ac.id/" target="_blank" className="hover:text-yellow hover:underline"> University
              of Indonesia </a> majoring in Information Systems.
            </p>
            <p className="text-justify font-primary text-primary font-semibold text-2xl tracking-wide">
              I am a <Tooltip hasArrow label="a pokemon!" placement="top" bg="gray.300" color="black" ><span className="line-through">greninja</span></Tooltip> person that would love to challenge myself with
              new things. As you can see, i love <span className="animate-pulse text-secondary">blue</span> sooooo muchhh. Do you want
              to know more about me? Just scroll down the page..
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
