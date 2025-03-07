// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5">
            <span className="text-[#16f2b3]">Who I am?</span>{' '}
            <span className="text-white">My name is Ding Wang, with years of R&D experience.</span>
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 bg-[#1a1443] p-6 rounded-lg relative">
              <h3 className="text-xl text-pink-500 font-bold mb-4">Before AI</h3>
              <ul className="text-gray-200 space-y-8">
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>A quick learner in traditional development</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>A Professional Verification Engineer with solid experience</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>A few project management experiences with conventional methods</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Some financial quantitative strategies</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Limited competence in specialized areas</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-[#1a1443] p-6 rounded-lg">
              <h3 className="text-xl text-[#16f2b3] font-bold mb-4">Now with AI</h3>
              <ul className="text-gray-200 space-y-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>A supercharged learner with 2-3x efficiency</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>A versatile Full Stack Engineer empowered by AI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>Efficiently managing projects with AI-driven approaches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>More quantitative dimensions and much more factors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>Enhanced competence across multiple domains</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={380}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
}
;

export default AboutSection;