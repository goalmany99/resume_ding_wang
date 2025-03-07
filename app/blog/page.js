// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  const blogs = [
    {
      title: "DeepSeek的潜在优势：超越其他大语言模型的进化速度",
      description: "深入分析DeepSeek的快速发展及其相比其他大语言模型的卓越表现。",
      url: "https://zhuanlan.zhihu.com/p/23400254698",
      cover_image: "/blog-covers/1.png",
      reading_time_minutes: 8,
      published_at: "2024-02-15",
      public_reactions_count: 156,
      comments_count: 32
    },
    {
      title: "DeepSeek的中文写作能力超越其他大模型",
      description: "探索DeepSeek在生成中文内容方面相比其他AI模型的优势。",
      url: "https://www.toutiao.com/item/7465526809460654642/",
      cover_image: "/blog-covers/2.png",
      reading_time_minutes: 6,
      published_at: "2024-02-15",
      public_reactions_count: 98,
      comments_count: 25
    },
    {
      title: "使用DeepSeek为您的投资基金评级",
      description: "一份关于如何利用DeepSeek的能力进行基金评估和投资分析的实用指南。",
      url: "https://zhuanlan.zhihu.com/p/22024200114",
      cover_image: "/blog-covers/3.png",
      reading_time_minutes: 10,
      published_at: "2024-01-25",
      public_reactions_count: 203,
      comments_count: 45
    },
    {
      title: "使用AI辅导孩子英语学习 - 一位父亲的AI使用心得",
      description: "分享如何让AI让孩子的英语学习变得更有趣和高效的个人经验。",
      url: "https://www.toutiao.com/item/7469250963195478563/",
      cover_image: "/blog-covers/4.png",
      reading_time_minutes: 7,
      published_at: "2024-02-01",
      public_reactions_count: 167,
      comments_count: 38
    },
    {
      title: "使用AI生成可转债套利程序（附代码）",
      description: "一份关于如何实现AI驱动的可转债套利策略的技术指南，包含完整程序代码。",
      url: "https://zhuanlan.zhihu.com/p/705522563",
      cover_image: "/blog-covers/5.png",
      reading_time_minutes: 12,
      published_at: "2024-02-05",
      public_reactions_count: 245,
      comments_count: 56
    },
    {
      title: "商品期货策略的量化分析与回测",
      description: "详细探讨商品期货市场的量化交易策略，包含全面的回测结果。",
      url: "https://zhuanlan.zhihu.com/p/714648195",
      cover_image: "/blog-covers/6.png",
      reading_time_minutes: 15,
      published_at: "2024-02-10",
      public_reactions_count: 189,
      comments_count: 42
    }
  ];
  return blogs;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            我的文章
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;