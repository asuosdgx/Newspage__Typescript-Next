import { fetchArticlesByCategory } from "@/api/articles";
import Grid from "@/app/components/Grid/Grid";
import Link from "next/link";

type Props = {
  params: Promise<{
    category: string;
  }>;
};
export const revalidate = 60;

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const articles = await fetchArticlesByCategory(category);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Link
          href="/news/categories"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-5xl font-bold font-serif text-center capitalize">
          {category.replace("_", " ")}
        </h1>
      </div>

      {articles.length > 0 ? (
        <Grid articles={articles} />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600 dark:text-gray-400">
            No news found for this categorie.
          </h2>
        </div>
      )}
    </div>
  );
}
