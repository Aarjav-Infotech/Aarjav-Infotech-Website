"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ArticleItem {
  id: string | number;
  date: string;
  title: string;
  image: string;
  link: string;
}

const defaultArticles: ArticleItem[] = [
  {
    id: 1,
    date: "June 7, 2026",
    title: "LLM Agnostic Solutions: The 2026 Enterprise AI Guide",
    image: "/images/article-1.svg",
    link: "#",
  },
  {
    id: 2,
    date: "May 16, 2026",
    title: "Snowflake Cortex Alternative: 2026 Evaluation Framework",
    image: "/images/article-2.svg",
    link: "#",
  },
  {
    id: 3,
    date: "April 7, 2026",
    title: "Multi-agent vs single-agent AI systems: 2026 decision guide",
    image: "/images/article-3.svg",
    link: "#",
  },
];

interface HomeArticlesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  articles?: ArticleItem[];
}

export function HomeArticles({
  eyebrow = "Blogs",
  title = "Articles & Insights",
  subtitle = "Exploring the intersection of artificial intelligence, industrial automation, and the future of professional workflows.",
  articles = defaultArticles,
}: HomeArticlesProps) {
  return (
    <section className="relative w-full bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1404px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
          {eyebrow && (
            <div className="boder-slate-200 mb-4 inline-flex items-center gap-1.5 rounded border-b-4 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[52px]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-start"
            >
              <Link href={article.link} className="flex w-full flex-col">
                {/* Image Container with Rounded Corners */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Date */}
                <span className="text-basic mt-4 font-medium text-slate-400">
                  {article.date}
                </span>

                {/* Article Title */}
                <h3 className="mt-2 text-lg leading-snug font-bold text-slate-900 transition-colors group-hover:text-[#2b2bad] sm:text-xl">
                  {article.title}
                </h3>

                {/* Compact Read More Pill Button */}
                <div className="mt-5 inline-flex">
                  <span className="text-basic inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-[#f3f4f6] px-4 py-2 font-semibold text-slate-900 shadow-sm transition-all duration-200 group-hover:bg-slate-200">
                    Read more
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
