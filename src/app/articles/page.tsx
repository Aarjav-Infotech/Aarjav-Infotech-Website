import ArticleDetail from "@/features/articles/article-detail";
import ArticlesContent from "@/features/articles/articles-content";

interface ArticlesPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const { id } = await searchParams;

  // If ?id= is present in the URL, render the article detail page for that ID
  if (id) {
    return <ArticleDetail id={Number(id)} />;
  }

  // Otherwise, render the general article list
  return <ArticlesContent />;
}
