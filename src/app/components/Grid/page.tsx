import type { Article } from "@/types/news";
import Card from "../Card/page";


type Props = {
  articles : Article[];
};

export default function Grid({ articles }: Props) {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {articles.map((article, index) => <Card key={index} article={article} />)}
    </div>
    
  );
}