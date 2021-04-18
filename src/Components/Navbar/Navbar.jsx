import React from "react"
import skyhaf from "../../Assets/skyhafShadow.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const Navbar = () => {
    return ( 
        <>
            <div className="container mx-auto pt-8">
                <div className="flex flex-row justify-between">
                    <Link><img src={skyhaf} /></Link>
                    <div className="flex flex-row space-x-14 my-auto pr-12 tracking-wider">
                        <Link to="#About" className="text-2xl font-head text-white hover:underline tracking-widest">
                            ABOUT
                        </Link>
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
        </>
     );
}
 
export default Navbar;