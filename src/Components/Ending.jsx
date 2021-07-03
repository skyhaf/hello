import react from "react";
import EndingImage from "../Assets/img/Ending.svg";

const Ending = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center w-3/4 pb-36 pt-72" id="Resume">
        <div className="w-1/2">
          <img src={EndingImage} className="pt-10 pr-8 lg:pr-0" />
        </div>
        <div className="w-1/2 flex flex-col space-y-6 font-primary text-2xl lg:text-4xl font-semibold text-white tracking-wide">
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
          <a href="https://drive.google.com/file/d/19tmf5jaSSDfQaIm0QJ5F3PU0UoxIxt5M/view?usp=sharing"
          className="bg-white w-2/3 rounded-lg hover:shadow-lg" target="_blank">
            <p className="text-secondary text-center text-lg">
            My Resume
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Ending;
