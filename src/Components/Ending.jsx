import react from "react";
import EndingImage from "../Assets/img/Ending.svg";

const Ending = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center w-3/4 pb-36 pt-72">
        <div className="w-1/2">
          <img src={EndingImage} className="pt-8" />
        </div>
        <div className="w-1/2 flex flex-col space-y-6 font-primary text-4xl font-semibold text-white tracking-wide">
          <p>It seems, our flight is over...</p>
          <p>
            But hey, this is not the end. If you want to get in touch with me,
            you can mail me{"  "}
            <a
              href="mailto:hafiznasution2002@gmail.com"
              target="_blank"
              className="text-yellow hover:text-black"
            >
              here!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Ending;
