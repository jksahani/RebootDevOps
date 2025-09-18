import React from "react"
import { Link } from "react-router-dom"
import { FaDownload } from "react-icons/fa6"
import HighLightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import Footer from "../components/common/Footer"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import { MdOutlineRateReview } from "react-icons/md"

const Home = () => {
  return (
    <div>

        {/* Section 1 */}
        <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
         text-white justify-between">


            {/* Heading */}
            <div className='text-center text-4xl font-semibold mt-7'>
                Master 
                <HighLightText text={"Cloud "} />
                & 
                <HighLightText text={"DevOps"} />
            </div>

            {/* intro */}
            <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>

                With our online courses, you can learn at your own pace, from anywhere in the world, and get access to a live classes, including hands-on projects, resources, and personalized feedback from instructor. 
            
            </div>

            {/* Buttons */}
            <div className='flex flex-row gap-7 mt-8'>
                <a 
                            href="https://www.instagram.com/rebootdevops/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-yellow-50 text-black sm:text-[16px] px-6 py-3 rounded-md font-bold hover:scale-95 transition-all duration-200 hover:shadow-none"
                            >
                            Learn More
                        </a>
                        <a 
                            href="https://wa.me/919650817044" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
      bg-richblack-800 hover:scale-95 transition-all duration-200 hover:shadow-none"
                            >
                            Book a Demo
                        </a>

            </div>

            {/* video */}
            <div className='mx-3 my-14 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video className='shadow-[20px_20px_rgba(255,255,255)]'
                muted
                loop
                autoPlay
                >
                <source  src={Banner} type="video/mp4" />
                </video>
            </div>

            {/* codeblocks1 */}
            <div>
                <CodeBlocks 

                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                           Level up your
                            <HighLightText text={"skills "}/>
                            with our online training.
                        </div>
                    }

                    subheading = {
                        "Our courses are designed and taught by industry expert who have years of experience in Cloud and Devops and are passionate about sharing their knowledge with you."
                    }

                    codeblock={`Expert-Led Training\nOur courses are delivered by certified industry professional who bring years of real-world experience into the classroom.\n You’ll gain practical insights, proven strategies, and up-to-date knowledge of the latest tools and best practices.\n Learning directly from experts helps you build confidence and develop skills that are immediately applicable in real projects and help in your job.`}
                    codeColor={"text-yellow-25"}
                    backgroundGradient={"code-block1-grad"}
                />
            </div>

            {/* codeblocks2 */}
            <div>
                <CodeBlocks 

                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='w-[100%] text-4xl font-semibold lg:w-[50%]'>
                            Your
                            <HighLightText text={` Cloud & DevOps `}/> Journey Starts Here.
                        </div>
                    }

                    subheading = {
                        "Go ahead, give it a try. Learn how to design, deploy, and automate scalable infrastructure just like the pros do."
                    }

                    codeblock={`Hands-On Labs\n We don’t just teach theory — you’ll practice in real cloud environments with live tools and platforms used by top companies. This approach ensures you leave the training with not only knowledge but also job-ready, practical skills.\n\nCareer Support\nYour success goes beyond the classroom. We offer comprehensive career support including personalized resume building, mock interviews, and job search guidance.`}
                    codeColor={"text-blue-25"}
                    backgroundGradient={"code-block2-grad"}
                />
            </div>

            <ExploreMore />

        </div>

        {/* Section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
                    
            <div className='homepage_bg h-[310px]'>
                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    
                    <div className='hidden lg:block h-[180px]'></div>
                    <div className=' mt-8 lg:mt-0 flex flex-row gap-7 text-white '>
                        <a 
                            href="/Reboot_Syllabus.pdf"
                            download="Reboot_Syllabus.pdf"
                            className="inline-flex items-center gap-3 bg-yellow-50 text-black sm:text-[16px] px-6 py-3 rounded-md font-bold hover:scale-95 transition-all duration-200 hover:shadow-none"
                            >
                            Download Syllabus
                            <FaDownload />
                        </a>

                    </div>

                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-col lg:flex-row justify-between gap-5 mb-10 -mt-20 lg:mt-[95px]'>
                    
                    <div className='text-4xl font-semibold lg:w-[45%]'>
                        Get the Skills you need for a
                        <HighLightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-10 lg:w-[40%] items-start'>

                        <div className='text-[16px]'>
                        Whether you’re just entering the tech world or upskilling for your next role, our training helps you grow faster, accelerate your IT journey and move ahead in your career.
                        </div>

                    </div>
                </div>

                {/* other remaining sections in the form of components */}
                <div className='text-4xl font-semibold lg:w-[45%]'>
                        Know Your 
                        <HighLightText text={"Instructor"} />
                    </div> 
                <TimelineSection />

                {/* <LearningLanguageSection /> */}
   
            </div> 

        </div>
 
 
        {/* Footer */}
        <Footer/>

    </div>
  )
};

export default Home;