import React from "react"
import Navbar from "./Navbar/Navbar"
import HeadLanding from "./HeadLanding/HeadLanding"
import About from "./About/About"

const Home = () => {
    return ( 
      <>
        <div className="bg-primary">
          <Navbar />
          <HeadLanding />
          <About />
        </div>
      </>
     );
}
 
export default Home;