import React from "react";
import Experience from "./Experience";
import Project from "./Project";

import skyhaf from "../Assets/skyhaf/skyhafShadow.svg";

import { Tooltip } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <>
      <div className="bg-primary">


        <div className="container mx-auto pt-8">
          <div className="flex flex-row justify-between">
            <Link>
              <img src={skyhaf} />
            </Link>
            <div className="flex flex-row space-x-14 my-auto pr-12 tracking-wider">
              <a
                href="#About"
                className="text-2xl font-head text-white hover:underline tracking-widest"
              >
                ABOUT
              </a>
              <Link className="text-2xl font-head text-white hover:underline tracking-widest">
                EXPERIENCE
              </Link>
              <Link className="text-2xl font-head text-white hover:underline tracking-widest">
                PROJECT
              </Link>
              <Link className="text-2xl font-head text-white hover:underline tracking-widest">
                RESUME
              </Link>
            </div>
          </div>
        </div>

        <div className="Headlanding py-48">
          <div className="container mx-auto px-12">
            <h1 className="font-head-border text-white text-5xl tracking-wider">
              SIT TIGHT!!
            </h1>
            <h1 className="font-head-border text-white text-5xl tracking-wider">
              YOU ARE GOING TO FLY AROUND..
            </h1>
          </div>
          <div id="awanKananLanding" className="h-60"></div>
          <div id="awanKiriLanding" className="h-52"></div>
        </div>

        <div className="container mx-auto flex justify-center" id="About">
          <div className="flex justify-center w-full py-60" id="AboutMe">
            <div className="flex flex-col space-y-6 w-1/2 pb-8">
              <h1 className="font-head-border text-5xl text-primary text-center tracking-wide">
                ABOUT ME
              </h1>
              <p className="text-justify font-primary text-primary font-semibold text-2xl tracking-wide">
                Hello, my name is{" "}
                <a
                  href="https://www.linkedin.com/in/hafizbhadrikaalamsyah/"
                  target="_blank"
                  className="hover:text-secondary hover:underline"
                >
                  {" "}
                  Hafiz Bhadrika Alamsyah
                </a>
                . People call me habe. Currently, i am pursuing a Computer
                Science degree at{" "}
                <a
                  href="https://www.ui.ac.id/"
                  target="_blank"
                  className="hover:text-yellow hover:underline"
                >
                  {" "}
                  University of Indonesia
                </a>{" "}
                majoring in Information Systems.
              </p>
              <p className="text-justify font-primary text-primary font-semibold text-2xl tracking-wide">
                I am a{" "}
                <Tooltip
                  hasArrow
                  label="Greninja is a pokemon!"
                  placement="top"
                  bg="gray.300"
                  color="black"
                >
                  <span className="line-through">greninja</span>
                </Tooltip>{" "}
                person that would love to challenge myself with new things. As
                you can see, i love{" "}
                <span className="animate-pulse text-secondary">blue</span>{" "}
                sooooo muchhh. Do you want to know more about me? Just scroll
                down the page..
              </p>
            </div>
          </div>
        </div>

        <Experience />
        <Project />

      
      </div>
    </>
  );
};

export default Home;
