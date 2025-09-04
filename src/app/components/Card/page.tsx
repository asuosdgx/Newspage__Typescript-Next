import { Article } from "@/types/news";
import Link from "next/link";

type Props = {
  article: Article;
};

export default function Card(article: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Link href={`/news/${article.article.source.id || ''}`}>
      {article.article.urlToImage && (
        <img
          src={article.article.urlToImage}
          alt={article.article.title}
          className="w-full h-48 object-cover"
        ></img>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{article.article.title}</h2>
        <p className="text-gray-700 text-sm">{article.article.description}</p>
        <div className="mt-4">
          <p className="text-gray-500 text-xs mt-2">
            Source: {article.article.source.name}
          </p>
          <p className="text-gray-500 text-xs">
            Published At:{" "}
            {new Date(article.article.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
}
