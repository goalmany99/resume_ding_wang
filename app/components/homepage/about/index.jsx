// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          关于我
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5">
            <span className="text-[#16f2b3]">我是谁？</span>{' '}
            <span className="text-white">我是王丁，拥有多年外企研发中心工作经验。</span>
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 bg-[#1a1443] p-6 rounded-lg relative">
              <h3 className="text-xl text-pink-500 font-bold mb-4">以前的我</h3>
              <ul className="text-gray-200 space-y-8">
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>一个快速学习者</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>拥有丰富经验的资深测试工程师</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>具有一定的项目管理经验</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>有一些金融量化策略和研究经验</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
                <li className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>在专业领域的能力有限，例如设计图片，视频制作...</span>
                  <span className="hidden lg:block absolute -right-7 top-1/2 w-6 h-[2px] bg-gray-600"></span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-[#1a1443] p-6 rounded-lg">
              <h3 className="text-xl text-[#16f2b3] font-bold mb-4">拥抱AI之后</h3>
              <ul className="text-gray-200 space-y-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>学习效率提升2-3倍的超级学习者</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>擅长AI智能体设计，工作流搭建，精通提示词工程的全栈工程师</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>高效的AI驱动项目管理方法</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>更多的量化维度和更丰富的因子分析</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
                  <span>跨多个领域的增强能力，拥有无限可能...</span>
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
            alt="王丁"
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
}
;

export default AboutSection;