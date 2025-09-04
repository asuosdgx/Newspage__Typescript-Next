import { Article } from "@/types/news";
import newsAPI from "./axios";

type Data = {
  articles: Article[];
};

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await newsAPI.get<Data>("/top-headlines", {
      params: {
        country: "us",
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
export const fetchArticleById = async (id: string): Promise<Article | null> => {
  try {
    const response = await newsAPI.get<Data>("/top-headlines", {
      params: {
        country: "us",
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    const article = response.data.articles.find(
      (article) => article.source.id === id
    );
    return article || null;
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    return null;
  }
};
export const fetchArticlesByCategory = async (
  category: string
): Promise<Article[]> => {
  try {
    const response = await newsAPI.get<Data>("/top-headlines/sources", {
      params: {
        country: "us",
        category: category,
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles by category:", error);
    return [];
  }
};
