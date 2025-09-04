import { Article } from "@/types/news";
import Grid from "./components/Grid/page";
import { fetchArticles } from "../api/articles";
import { useState } from "react";




export default async function Home() {
  const articles = await fetchArticles(); 
  return (
    <div>
      <Grid articles={articles} />
    </div>
  );
}
