// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  const blogs = [
    {
      title: "DeepSeek's Potential Advantages: Evolutionary Speed Surpassing Other LLM",
      description: "An in-depth analysis of DeepSeek's rapid evolution and its superior performance compared to other large language models.",
      url: "https://zhuanlan.zhihu.com/p/23400254698",
      cover_image: "/blog-covers/1.png",
      reading_time_minutes: 8,
      published_at: "2024-02-15",
      public_reactions_count: 156,
      comments_count: 32
    },
    {
      title: "DeepSeek's Chinese Writing Capabilities Outperforming Other Large Models",
      description: "Exploring how DeepSeek excels in generating Chinese content compared to other AI models.",
      url: "https://www.toutiao.com/item/7465526809460654642/",
      cover_image: "/blog-covers/2.png",
      reading_time_minutes: 6,
      published_at: "2024-02-15",
      public_reactions_count: 98,
      comments_count: 25
    },
    {
      title: "Using DeepSeek to Rate Your Investment Funds",
      description: "A practical guide on leveraging DeepSeek's capabilities for fund evaluation and investment analysis.",
      url: "https://zhuanlan.zhihu.com/p/22024200114",
      cover_image: "/blog-covers/3.png",
      reading_time_minutes: 10,
      published_at: "2024-01-25",
      public_reactions_count: 203,
      comments_count: 45
    },
    {
      title: "Using AI to Tutor Children in English - A Happy Father's AI Experience",
      description: "Personal experience sharing on how AI can make English learning more enjoyable and effective for children.",
      url: "https://www.toutiao.com/item/7469250963195478563/",
      cover_image: "/blog-covers/4.png",
      reading_time_minutes: 7,
      published_at: "2024-02-01",
      public_reactions_count: 167,
      comments_count: 38
    },
    {
      title: "Using AI to Generate Programs for Convertible Bond Arbitrage (With Code)",
      description: "A technical guide on implementing AI-powered arbitrage strategies for convertible bonds, including complete program code.",
      url: "https://zhuanlan.zhihu.com/p/705522563",
      cover_image: "/blog-covers/5.png",
      reading_time_minutes: 12,
      published_at: "2024-02-05",
      public_reactions_count: 245,
      comments_count: 56
    },
    {
      title: "Quantitative Analysis and Backtesting of a Commodity Futures Strategy",
      description: "Detailed exploration of quantitative trading strategies in commodity futures markets with comprehensive backtesting results.",
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
            All Blog
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