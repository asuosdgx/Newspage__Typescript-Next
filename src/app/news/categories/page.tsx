import { getAvailableCategories } from "@/api/articles";
import Link from "next/link";

export const dynamic = "force-static";

export default function PageCategories() {
  const categories = getAvailableCategories();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold font-serif mb-8 text-center mb-4">
        Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/news/categories/${category}`}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:translate-y-1"
          >
            <div className="flex items-center justify-center h-32">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 capitalize">
                {category.replace("_", " ")}
              </h2>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
