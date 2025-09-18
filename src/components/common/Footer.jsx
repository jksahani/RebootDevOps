import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import { ImMail3, ImLinkedin2, ImInstagram, ImPhone, ImWhatsapp } from "react-icons/im";


// Images
import codeBuddyLogo from "../../assets/Logo/reboot.png";

// footer data
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800 mx-3 rounded-2xl mb-3 pt-5 mt-3">
      


      {/* bottom footer */}
      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  text-sm">
        {/* Section 1 */}

        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
         
          <div className="text-center flex flex-col sm:flex-row ">
            <div className="flex gap-2">
              <span> ©  {(new Date().getFullYear())} </span>
               {" "}
               <a
               className="text-brown-100 hover:underline mr-1"
              href="mailto:rebootdevops@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >Reboot IT Training & Services </a>
        
            </div>
          </div>

          <div className="flex items-center mb-2">
            <a href="https://www.linkedin.com/in/jeetendra-sahani-38157122/" className="text-white p-3 hover:bg-richblack-700 rounded-full duration-300" target="_blank" rel="noopener noreferrer">
              <ImLinkedin2 size={17} />
            </a>
            <a href="https://www.instagram.com/rebootdevops/" className="text-white p-3 hover:bg-richblack-700 rounded-full duration-300" target="_blank" rel="noopener noreferrer">
              <ImInstagram size={17} />
            </a>
            <a href="mailto:rebootdevops@gmail.com" className="text-white p-3 hover:bg-richblack-700 rounded-full duration-300" target="_blank" rel="noopener noreferrer">
              <ImMail3 size={17} />
            </a>
            <a
              href="tel:+919650817044"
              className="text-white p-3 hover:bg-richblack-700 rounded-full duration-300"
            >
              <ImPhone size={17} /> {/* or any phone icon */}
            </a>
            <a
              href="https://wa.me/919650817044" 
              className="text-white p-3 hover:bg-richblack-700 rounded-full duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImWhatsapp size={17} /> {/* WhatsApp icon */}
            </a>


          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;