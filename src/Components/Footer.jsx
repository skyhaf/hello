import React from "react"
import { StarIcon } from '@chakra-ui/icons'
import footerBG from "../Assets/bg/footerBG.svg"
import instagramIkon from "../Assets/icon/Instagram.svg"
import googleIkon from "../Assets/icon/Google.svg"
import linkedinIkon from "../Assets/icon/LinkedIN.svg"
import githubIkon from "../Assets/icon/Github.svg"
import mediumIkon from "../Assets/icon/Medium.svg"

const Footer = () => {
    return (  
        <>
            <div className="flex flex-col space-y-6 justify-center py-12" id="footer">
                <div className="flex flex-row justify-center">
                    <a href="https://www.instagram.com/skyhaf/" target="_blank"><img src={instagramIkon} className="px-3" /></a>
                    <a href="mailto:hafiznasution2002@gmail.com" target="_blank"><img src={googleIkon} className="px-3" /></a>
                    <a href="https://www.linkedin.com/in/hafizbhadrikaalamsyah/" target="_blank"><img src={linkedinIkon} className="px-3" /></a>
                    <a href="https://github.com/skyhaf" target="_blank"><img src={githubIkon} className="px-3" /></a>
                    <a href="https://hafiznasution2002.medium.com/" target="_blank"><img src={mediumIkon} className="px-3" /></a>
                </div>
                <div className="text-center text-lg font-semibold text-white">
                    Made with <StarIcon pb={0.5} /> by me
                </div>
                <hr className="bg-white h-2" />
            </div>
        </>
    );
}
 
export default Footer;