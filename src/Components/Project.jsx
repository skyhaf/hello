import React from "react";
import gambarKosong from "../Assets/skyhaf/skyhaf.svg";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import PemiraCmp from "./Project/PemiraCmp";
import BizhubCmp from "./Project/BizhubCmp";

const Project = () => {
  return (
    <>
      <div className="py-28" id="Project">
        <div
          className="font-head-border text-white text-5xl text-center py-36"
          id="judulProjek"
        >
          PROJECT
        </div>
        <div className="container mx-auto justify-center w-5/6">
          <div className="grid grid-cols-3 gap-14">
            <div className="h-64 py-4">
              {/* <div className="flex justify-center">
                    <img src={gambarKosong} className="w-48 h-48" />
                </div> */}
              <PemiraCmp />
              <div className="text-center font-bold text-lg">
                PEMIRA IKM UI 2020
              </div>
              <div className="text-center tracking-wider">
                I took the role of project manager to build an E-Voting website
                for University of Indonesia College student.
              </div>
              <a
                href="https://pemira.ui.ac.id/"
                target="_blank"
                className="flex flex-row space-x-1 justify-center"
                id="seeProject"
              >
                <p className="text-white">See Project</p>
                <ExternalLinkIcon
                  className="my-auto"
                  id="external"
                  color="white"
                />
              </a>
            </div>

            <div className="h-64 py-4">
              {/* <div className="flex justify-center">
                    <img src={gambarKosong} className="w-48 h-48" />
                </div> */}
              <BizhubCmp />
              <div className="text-center font-bold text-lg">BIZHUB </div>
              <div className="text-center tracking-wider">
                I build a responsive website for one of ministry of manpower
                project which is Bizhub.
              </div>
              <a
                href="https://bizhub.kemnaker.go.id/"
                target="_blank"
                className="flex flex-row space-x-1 justify-center"
                id="seeProject"
              >
                <p className="text-white">See Project</p>
                <ExternalLinkIcon
                  className="my-auto"
                  id="external"
                  color="white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
