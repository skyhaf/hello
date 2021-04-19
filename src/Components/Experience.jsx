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
                  <p className="px-20 font-primary text-2xl text-white focus:text-yellow">
                    JOB
                  </p>
                </Tab>
                <Tab _active={{ outline: "none" }} _focus={{ outline: "none" }}>
                  <p className="px-20 font-primary text-2xl text-white focus:text-yellow">
                    COMMITTEE
                  </p>
                </Tab>
                <Tab _active={{ outline: "none" }} _focus={{ outline: "none" }}>
                  <p className="px-20 font-primary text-2xl text-white focus:text-yellow">
                    SKILL
                  </p>
                </Tab>
              </TabList>
            </div>

            <TabPanels>
              <TabPanel py={12}>
                <p className="font-primary text-white text-2xl">
                  I am currently looking for a job, Do you want to{" "}
                  <span className="font-semibold text-yellow">hire</span> me?
                </p>
              </TabPanel>
              <TabPanel py={12}>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _active={{ outline: "none" }}
                        _focus={{ outline: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          Section 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                      >
                        <Box flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel py={12}>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Experience;
