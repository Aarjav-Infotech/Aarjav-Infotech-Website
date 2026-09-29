import type { Metadata } from "next";
import ArticleDetail from "@/features/articles/article-detail";
import ArticlesContent from "@/features/articles/articles-content";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn";

interface ArticlesPageProps {
  searchParams: Promise<{ id?: string }>;
}

export async function generateMetadata({
  searchParams,
}: ArticlesPageProps): Promise<Metadata> {
  const { id } = await searchParams;

  if (id) {
    return {
      ...createMetadata({
        title: `Article #${id} | Blog & Insights`,
        description:
          "Read the latest article and insights from Aarjav Infotech.",
        path: `/blog?id=${id}`,
      }),
      openGraph: {
        title: `Article #${id} | Blog & Insights`,
        description:
          "Read the latest article and insights from Aarjav Infotech.",
        url: `/blog?id=${id}`,
        images: [
          {
            url: asset("/images/blog-and-insight.png"), // Or article.coverImage if available
            width: 1200,
            height: 630,
            alt: `Article #${id} - Aarjav Infotech`,
          },
        ],
      },
    };
  }

  // Default metadata for the general blog list page
  return {
    ...createMetadata({
      title: "Blog & Insights",
      description:
        "Explore the latest insights, engineering perspectives, and updates on enterprise AI from Aarjav Infotech.",
      path: "/blog",
    }),
    openGraph: {
      title: "Blog & Insights | Aarjav Infotech",
      description:
        "Explore the latest insights, engineering perspectives, and updates on enterprise AI from Aarjav Infotech.",
      url: "/blog",
      images: [
        {
          url: asset("/images/Blog-&-Insight.png"),
          width: 1200,
          height: 630,
          alt: "Blog & Insights - Aarjav Infotech",
        },
      ],
    },
  };
}

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const { id } = await searchParams;

  if (id) {
    return <ArticleDetail id={Number(id)} />;
  }

  return <ArticlesContent />;
}
