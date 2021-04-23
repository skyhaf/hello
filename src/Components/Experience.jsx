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

import logoCompfest from "../Assets/logoCompfest.jpeg"
import logoPemira from "../Assets/logoPemira.jpeg"
import logoOKK from "../Assets/logoOKK.jpeg"
import logoDDP0 from "../Assets/logoDDP0.jpeg"
import logoPerak from "../Assets/logoPerak.jpeg"
import logoCF from "../Assets/logoCF.jpeg"


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
                  Currently, i am currently looking for an internship. Do you want to{" "}
                  <span className="font-semibold text-secondary hover:text-yellow cursor-pointer hover:underline">contact</span> me?
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
                        className="bg-white hover:bg-secondary hover:text-white focus:bg-secondary active:bg-secondary focus:text-white active:text-white"
                      >
                        <Box flex="1" textAlign="left" className="font-semibold text-lg">
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
                    <AccordionPanel pb={4} className=" bg-secondary text-md text-left text-white">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white focus:bg-secondary active:bg-secondary focus:text-white active:text-white"
                      >
                        <Box flex="1" textAlign="left" className="font-semibold text-lg">
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
                    <AccordionPanel pb={4} className=" bg-secondary text-md text-left text-white">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white focus:bg-secondary active:bg-secondary focus:text-white active:text-white"
                      >
                        <Box flex="1" textAlign="left" className="font-semibold text-lg">
                          <div className="flex flex-row space-x-4">
                            <img src={logoOKK} className="h-10 w-10" />
                            <p className="my-auto">
                            Staff of Configuration
                          </p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className=" bg-secondary text-md text-left text-white">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white focus:bg-secondary active:bg-secondary focus:text-white active:text-white"
                      >
                        <Box flex="1" textAlign="left" className="font-semibold text-lg">
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
                    <AccordionPanel pb={4} className=" bg-secondary text-md text-left text-white">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white focus:bg-secondary active:bg-secondary focus:text-white active:text-white"
                      >
                        <Box flex="1" textAlign="left" className="font-semibold text-lg">
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
                    <AccordionPanel pb={4} className=" bg-secondary text-md text-left text-white">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                        _hover={{}}
                        className="bg-white hover:bg-secondary hover:text-white focus:bg-secondary active:bg-secondary focus:text-white active:text-white"
                      >
                        <Box flex="1" textAlign="left" className="font-semibold text-lg">
                          <div className="flex flex-row space-x-4">
                            <img src={logoCF} className="h-10 w-10" />
                            <p className="my-auto">
                              Project Officer
                          </p>
                          </div>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className=" bg-secondary text-md text-left text-white">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                  
                </Accordion>
              </TabPanel>
              <TabPanel py={12}>
              <div class="grid grid-cols-3 gap-12">
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Management</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Project Management</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Proposal Writing</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">React.js</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Tailwind CSS</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Figma</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Django</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Java</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Python</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Javascript</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Problem Solving</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Teamwork</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Decision-making</div>
                <div className="py-10 font-semibold hover:text-secondary" id="skill">Leadership</div>
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
