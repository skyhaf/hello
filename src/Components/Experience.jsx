import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import logoCompfest from "../Assets/logo/logoCompfest.jpeg";
import logoPemira from "../Assets/logo/logoPemira.jpeg";
import logoOKK from "../Assets/logo/logoOKK.jpeg";
import logoDDP0 from "../Assets/logo/logoDDP0.jpeg";
import logoPerak from "../Assets/logo/logoPerak.jpeg";
import logoCF from "../Assets/logo/logoCF.jpeg";
import logoExtinct from "../Assets/logo/logoExtinct.jpg";
import check from "../Assets/check.svg";

const Experience = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center py-48">
        <div className="flex flex-col w-5/6">
          <h1 className="font-head-border text-center text-5xl text-white">
            EXPERIENCE
          </h1>
          <Tabs align="center" size="lg" id="tabExperience" isLazy>
            <div className="w-5/6">
              <TabList pt={6}>
                <Tab _active={{ outline: "none" }} _focus={{ outline: "none" }}>
                  <p className="px-16 font-primary text-2xl text-white focus:text-yellow">
                    WORK
                  </p>
                </Tab>
                <Tab _active={{ outline: "none" }} _focus={{ outline: "none" }}>
                  <p className="px-16 font-primary text-2xl text-white focus:text-yellow">
                    COMMITTEE
                  </p>
                </Tab>
                <Tab _active={{ outline: "none" }} _focus={{ outline: "none" }}>
                  <p className="px-16 font-primary text-2xl text-white focus:text-yellow">
                    SKILL
                  </p>
                </Tab>
              </TabList>
            </div>

            <TabPanels>
              <TabPanel py={12}>
                <p className="font-primary text-white text-2xl">
                  Currently, i am currently looking for an internship. Do you
                  want to{" "}
                  <span className="font-semibold text-secondary hover:text-yellow cursor-pointer hover:underline">
                    contact
                  </span>{" "}
                  me?
                </p>
              </TabPanel>
              <TabPanel py={12}>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white "
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-lg"
                        >
                          <div className="flex flex-row space-x-4">
                            <img src={logoCompfest} className="h-10 w-10" />
                            <p className="my-auto">
                              Staff of Business Development
                            </p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className=" bg-secondary text-md text-left text-white"
                    >
                      <div className="flex flex-col">
                        <h1 className="font-semibold">COMPFEST 13 </h1>
                        <p className="text-xs pb-4">March 2021 - present</p>
                        <p className="text-sm">
                          Compfest is one of the biggest IT event held by
                          student. As a staff of Business Development in
                          COMPFEST 13, I took the responsibility of raising
                          funds for COMPFEST 13 by working on IT projects from
                          clients.
                        </p>
                        <p></p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white "
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-lg"
                        >
                          <div className="flex flex-row space-x-4">
                            <img src={logoPemira} className="h-10 w-10" />
                            <p className="my-auto">
                              Person in Charge of E-Voting Division
                            </p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className=" bg-secondary text-md text-left text-white"
                    >
                      <div className="flex flex-col space-y-2">
                        <div>
                          <h1 className="font-semibold">PEMIRA IKM UI 2020</h1>
                          <p className="text-xs pb-4">
                            October 2020 - January 2021
                          </p>
                        </div>

                        <p className="text-sm">
                          PEMIRA IKM UI is a non-profit organization that aims
                          to carry out succession among University of Indonesia
                          students starting from the president of Badan
                          Eksekutif Mahasiswa Universitas Indonesia and Student
                          Element of the University of Indonesia Board of
                          Trustees. As Person in Charge of E-Voting Division, i
                          took responsibilities in choosing the right voting
                          method to use.
                        </p>
                        <p className="text-sm pt-2">
                          {" "}
                          What have i done through the time:
                        </p>
                        <div className="flex flex-col space-y-1">
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Build a web-based E-Voting system based on voting
                              principles in Indonesia (Luber dan Jurdil).
                            </p>
                          </div>
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Lead development team that consist of 6 people.
                            </p>
                          </div>
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Coordinating with every single Pemira Faculty in
                              University of Indonesia, Dewan Perwakilan
                              Mahasiswa UI, and Director of Student Affairs at
                              the University of Indonesia.{" "}
                            </p>
                          </div>
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Responsible for the E-Voting system that has been
                              used by University of Indonesia students with
                              approximately 50.000 ballots.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white "
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-lg"
                        >
                          <div className="flex flex-row space-x-4">
                            <img src={logoOKK} className="h-10 w-10" />
                            <p className="my-auto">Staff of Configuration</p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className=" bg-secondary text-md text-left text-white"
                    >
                      <div className="flex flex-col space-y-2">
                        <div>
                          <h1 className="font-semibold">OKK UI 2020</h1>
                          <p className="text-xs pb-4">
                            May 2020 - September 2020
                          </p>
                        </div>

                        <p className="text-sm">
                          OKK UI is a campus life orientation event that help
                          University of Indonesia freshman in order to know
                          better about campus life in university of Indonesia.
                          As staff of configuration, me and my teammates made a
                          configuration that made a form of "Satu Identitas" for
                          the Freshman of University of Indonesia.
                        </p>
                        <p className="text-sm pt-2">
                          {" "}
                          What have i done through the time:
                        </p>
                        <div className="flex flex-col space-y-1">
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Concepting on how to deliver the configuration.
                            </p>
                          </div>
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Configuring "Satu Identias" using neon flex light.
                            </p>
                          </div>
                          {/* <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">lorem ipsum</p>
                          </div> */}
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white "
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-lg"
                        >
                          <div className="flex flex-row space-x-4">
                            <img src={logoDDP0} className="h-10 w-10" />
                            <p className="my-auto">
                              Staff of Event & Student Mentor
                            </p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className=" bg-secondary text-md text-left text-white"
                    >
                      <div className="flex flex-col space-y-2">
                        <div>
                          <h1 className="font-semibold">DDP-0</h1>
                          <p className="text-xs pb-4">
                            August 2020 - September 2020
                          </p>
                        </div>

                        <p className="text-sm">
                          DDP-0 is an anually event held by computer science of
                          University of Indonesia students in helping freshmen
                          learning about the foundation of programming using the
                          python programming language.
                        </p>
                        <p className="text-sm pt-2">
                          {" "}
                          What have i done through the time:
                        </p>
                        <div className="flex flex-col space-y-1">
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Helping freshmen in learning Data types &
                              Operations, List, Tuple, Looping, Set, and
                              Dictionary using the Python programming language.
                            </p>
                          </div>
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Create a schedule for the DDP-0 agenda.
                            </p>
                          </div>
                          {/* <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Responsible for the E-Voting system that has been
                              used by University of Indonesia students with
                              approximately 50.000 ballots{" "}
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white "
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-lg"
                        >
                          <div className="flex flex-row space-x-4">
                            <img src={logoPerak} className="h-10 w-10" />
                            <p className="my-auto">
                              Staff of Field Coordinator
                            </p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className=" bg-secondary text-md text-left text-white"
                    >
                      <div className="flex flex-col space-y-2">
                        <div>
                          <h1 className="font-semibold">PERAK 2020</h1>
                          <p className="text-xs pb-4">
                            January 2020 - September 2020
                          </p>
                        </div>

                        <p className="text-sm">
                          PERAK is the largest internal event at Faculty of
                          Computer Science of University of Indonesia which aims
                          to strengthen relationships among Faculty of Computer
                          Science of University of Indonesia elements
                        </p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white "
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-lg"
                        >
                          <div className="flex flex-row space-x-4">
                            <img src={logoCF} className="h-10 w-10" />
                            <p className="my-auto">Project Officer</p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className=" bg-secondary text-md text-left text-white"
                    >
                      <div className="flex flex-col space-y-2">
                        <div>
                          <h1 className="font-semibold">PELITA 4</h1>
                          <p className="text-xs pb-4">
                            September 2018 - February 2019
                          </p>
                        </div>

                        <p className="text-sm">
                          PELITA 4 is an event that help 4 Depok senior high
                          school student in pursuing their career. As project
                          officer, I was responsible with all agenda that
                          related with pelita 4.
                        </p>
                        <p className="text-sm pt-2">
                          {" "}
                          What have i done through the time:
                        </p>
                        <div className="flex flex-col space-y-1">
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Manage a team of approximately 25 people.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white "
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-lg"
                        >
                          <div className="flex flex-row space-x-4">
                            <img src={logoExtinct} className="h-10 w-10" />
                            <p className="my-auto">
                              Liaison Officer of Tulus Company
                            </p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className=" bg-secondary text-md text-left text-white"
                    >
                      <div className="flex flex-col space-y-2">
                        <div>
                          <h1 className="font-semibold">SORE 8 EXTINCT</h1>
                          <p className="text-xs pb-4">
                            April 2018 - January 2018
                          </p>
                        </div>

                        <p className="text-sm">
                          SORE 8 EXTINCT, an anually event held by 4 Depok
                          senior high schools student that performing arts. 
                        </p>
                        <p className="text-sm pt-2">
                          {" "}
                          What have i done through the time:
                        </p>
                        <div className="flex flex-col space-y-1">
                          <div className="flex flex-row space-x-2">
                            <img src={check} className="h-5 w-5" />
                            <p className="text-sm my-auto">
                              Coordinating with tulus company through its manager.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel py={12}>
                <div class="grid grid-cols-3 gap-12">
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Management
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Project Management
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Proposal Writing
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    React.js
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Tailwind CSS
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Figma
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Django
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Java
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Python
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Javascript
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Problem Solving
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Teamwork
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Decision-making
                  </div>
                  <div
                    className="py-10 font-semibold hover:text-secondary"
                    id="skill"
                  >
                    Leadership
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Experience;
