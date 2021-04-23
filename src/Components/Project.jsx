import React from "react";
import gambarKosong from "../Assets/aboutBackground.svg"
import { PhoneIcon, AddIcon, WarningIcon, ExternalLinkIcon } from '@chakra-ui/icons'


const Project = () => {
  return (
    <>
      <div>
        <div className="font-head-border text-white text-5xl text-center py-36" id="judulProjek">
          PROJECT
        </div>
        <div className="container mx-auto justify-center w-5/6">
          <div className="grid grid-cols-3 gap-12">
            <div className="">
                <div className="flex justify-center">
                    <img src={gambarKosong} className="w-48 h-48" />
                </div>
              <div className="text-center">JUDUL PROJEK</div>
              <div className="text-center">Deskripsi projek yang berisikan informasi semuanya</div>
              <div className="flex flex-row space-x-1 justify-center" id="seeProject">
                  <p className="text-white">
                      See Project
                  </p>
                  <ExternalLinkIcon className="my-auto" id="external" color="white" />
              </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <img src={gambarKosong} className="w-48 h-48" />
                </div>
              <div className="text-center">JUDUL PROJEK</div>
              <div className="text-center">Deskripsi projek yang berisikan informasi semuanya</div>
              <div className="flex flex-row space-x-1 justify-center" id="seeProject">
                  <p className="text-white">
                      See Project
                  </p>
                  <ExternalLinkIcon className="my-auto" id="external" color="white" />
              </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <img src={gambarKosong} className="w-48 h-48" />
                </div>
              <div className="text-center">JUDUL PROJEK</div>
              <div className="text-center">Deskripsi projek yang berisikan informasi semuanya</div>
              <div className="flex flex-row space-x-1 justify-center" id="seeProject">
                  <p className="text-white">
                      See Project
                  </p>
                  <ExternalLinkIcon className="my-auto" id="external" color="white" />
              </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <img src={gambarKosong} className="w-48 h-48" />
                </div>
              <div className="text-center">JUDUL PROJEK</div>
              <div className="text-center">Deskripsi projek yang berisikan informasi semuanya</div>
              <div className="flex flex-row space-x-1 justify-center" id="seeProject">
                  <p className="text-white">
                      See Project
                  </p>
                  <ExternalLinkIcon className="my-auto" id="external" color="white" />
              </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <img src={gambarKosong} className="w-48 h-48" />
                </div>
              <div className="text-center">JUDUL PROJEK</div>
              <div className="text-center">Deskripsi projek yang berisikan informasi semuanya</div>
              <div className="flex flex-row space-x-1 justify-center" id="seeProject">
                  <p className="text-white">
                      See Project
                  </p>
                  <ExternalLinkIcon className="my-auto" id="external" color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
