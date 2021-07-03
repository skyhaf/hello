import React from "react";
import Experience from "./Experience";
import Project from "./Project";
import Footer from "./Footer";
import Ending from "./Ending";

import skyhaf from "../Assets/skyhaf/skyhafShadow.svg";

import { Tooltip } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="fixed bg-primary w-screen h-screen"
        style={{zIndex:'-10'}}>
          <Particles
          className="h-screen w-screen"
            params={{
              particles: {
                number: {
                  value: 150,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 1,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "bottom",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>

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
              <a href="#Experience"
               className="text-2xl font-head text-white hover:underline tracking-widest">
                EXPERIENCE
              </a>
              <a href="#Project"
               className="text-2xl font-head text-white hover:underline tracking-widest">
                PROJECT
              </a>
              <a href="#Resume"
               className="text-2xl font-head text-white hover:underline tracking-widest">
                RESUME
              </a>
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
        <Ending />
        <Footer />
      </div>
    </>
  );
};

export default Home;
