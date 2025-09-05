import Grid from "./components/Grid/Grid";
import { fetchArticles } from "../api/articles";

export const dynamic = "force-dynamic"

export default async function Home() {
  const articles = await fetchArticles(); 
  
  return (
    <div>
      <h1 className="text-5xl text-center my-3 font-bold font-serif">Latest News</h1>
      <Grid articles={articles} />
    </div>
  );
}
