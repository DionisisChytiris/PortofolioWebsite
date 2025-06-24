import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import SubmitForm from "./SubmitForm";
import SocialMediaBtns from "./SocialMediaBtns";

function Contact() {
  return (
    <div>
      <section id="contact" className="relative px-[5%] py-20 dark:bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-[100px] bg-[#9cb8db] dark:bg-gray-800 [clip-path:polygon(0_0,100%_0,100%_30%,0_50%)] md:[clip-path:polygon(0_0,100%_0,100%_50%,0_100%)] z-1"></div>
        <div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.6rem] text-[#495057] dark:text-gray-400 mt-0 md:mt-8 mb-4 font-semibold">
            Get In Touch
          </h2>

          <p className="text-[1.1rem] lg:text-[1.3rem] text-[#6c757d] dark:text-gray-300 mb-12 leading-[1.6] max-w-[800px]">
            Let's discuss your next project
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="flex-[0_0_45%] min-w-[300px] mb-8">
            <h3 className="text-[1.55rem] md:text-[1.75rem] font-bold text-[#212529] dark:text-gray-500 mb-6 leading-[1.4]">
              Let's work together on your next project
            </h3>
            <p className="text-[1.1rem] md:text-[1.2rem] text-[#495057] dark:text-gray-400 mb-6 leading-[1.5] md:leading-[1.6]">
              I'm currently available for freelance work and full-time
              opportunities. If you have a project that needs some creative
              coding, feel free to reach out!
            </p>

            <div className="mb-[2rem]">
              <div className="flex items-center mb-5">
                <MdEmail className="text-xl mr-4 text-gray-400" />
                <span className="text-[1rem] md:text-[1.2rem] text-[#495057] dark:text-gray-300">
                  diochy7tech@outlook.com
                </span>
              </div>
              <div className="flex items-center mb-5">
                <MdPhone className="text-xl mr-4 text-gray-400" />
                <span className="text-[1rem] md:text-[1.2rem] text-[#495057] dark:text-gray-300">
                  +44 7518935448
                </span>
              </div>
              <div className="flex items-center mb-5">
                <MdLocationOn className="text-xl mr-4 text-gray-400" />
                <span className="text-[1rem] md:text-[1.2rem] text-[#495057] dark:text-gray-300">
                  London, UK
                </span>
              </div>
              {/* <div className="text-white">{submittedName}</div> */}
            </div>

             <SocialMediaBtns/>
           
          </div>
          {/* Contact Form */}
          <div className="basis-[45%] min-w-full md:min-w-[300px] mt-12 md:-mt-28">
            <SubmitForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
