"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "DELIVERY & OPS",
    title: "Build vs Buy",
    desc: "A clear decision framework for when a micro-tool is enough - and when reliable automation needs custom integration.",
    image: "/images/blog_placeholder.png",
    link: "#",
  },
  {
    tag: "SECURITY & COMPLIANCE",
    title: "Security Checklist",
    desc: "What to verify before connecting tools - access scopes, secrets, logging, retention, and where sensitive data is allowed to flow.",
    image: "/images/blog_placeholder.png",
    link: "#",
  },
  {
    tag: "OUTCOMES & MEASUREMENT",
    title: "Measure What Matters",
    desc: "How to track automation impact using cycle time, quality, and error-rate signals instead of vanity metrics.",
    image: "/images/blog_placeholder.png",
    link: "#",
  },
];

export function HomeArticles() {
  return (
    <section className="relative max-h-[1053px] w-full bg-transparent">
      <div className="max-h-auto relative w-full overflow-hidden rounded-bl-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/images/white_bg.png"
            alt="Articles Background"
            fill
            // className="object-cover object-top"
            priority
          />
        </div>

        <div className="relative z-10 flex w-full flex-col gap-[10px] px-4 pt-[100px] pb-[60px] md:px-[80px] lg:pt-[199px] lg:pb-[99px]">
          {/* Header */}
          <div className="flex flex-col items-start justify-between gap-6 pb-[20px] md:flex-row md:items-end">
            <div className="flex w-full flex-col gap-[20px] lg:w-[630px]">
              <p
                className="text-[12px] leading-[15.6px] font-normal tracking-[1px] text-black uppercase"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                FROM OUR BLOG
              </p>
              <h2 className="text-[46px] leading-[46px] font-medium text-black">
                Articles & insights
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center justify-center rounded-[60px] border border-black/20 px-[25px] pt-[16px] pb-[17px] text-[16px] font-medium text-black shadow-sm transition-colors hover:bg-black hover:text-white"
            >
              All articles
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex w-full cursor-pointer flex-col"
              >
                <Link href={article.link} className="flex h-full flex-col">
                  {/* Image Container */}
                  <div className="relative mb-[20px] aspect-[413/450] w-full overflow-hidden rounded-[20px] rounded-bl-[80px] bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-[10px] left-[10px] z-10 flex items-center justify-center rounded-[20px] bg-white px-[8px] py-[6px] shadow-sm">
                      <span
                        className="text-[12px] leading-[15.6px] font-medium tracking-[1px] text-black uppercase"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      >
                        {article.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex grow flex-col">
                    <h3 className="mb-[10px] text-[24px] leading-[32px] font-medium text-black transition-colors group-hover:text-black/70">
                      {article.title}
                    </h3>
                    <p className="mb-[10px] line-clamp-3 text-[16px] leading-[22.4px] font-normal text-black/60">
                      {article.desc}
                    </p>
                    <div className="mt-auto pt-[20px]">
                      <div className="inline-flex h-[52px] items-center justify-center gap-[19px] rounded-[60px] border border-transparent bg-white px-[25px] text-black shadow-sm transition-all duration-300 [background:linear-gradient(white,white)_padding-box,linear-gradient(90deg,#091E46_1%,#075FF3_100%)_border-box] hover:text-white hover:[background:linear-gradient(90deg,#091E46_1%,#075FF3_100%)_padding-box,linear-gradient(90deg,#091E46_1%,#075FF3_100%)_border-box]">
                        <span className="text-[16px] leading-[17.6px] font-medium">
                          Read more
                        </span>
                        <ArrowRight
                          className="h-[19px] w-[19px]"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
