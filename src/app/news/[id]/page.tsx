
import { Article } from "@/types/news"
import { fetchArticleById } from "@/api/articles"

type Props = {
    params: {
        id: string ;
    }
}
export async function generateMetadata({ params }: Props) {
    const { id } = await params
    const details = await fetchArticleById(id);
    const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    if (!details) {
        return
}   return {
        title: details.title,
        description:  slugify(details.description || 'News Article'),
    }
}
export default async function News({params}: Props){

    const {id} = await params;
    const article: Article | null = await fetchArticleById(id);
    if (!article) {
        return <div className="p-4">Article not found.</div>;
        
    }

    return(
        <div className="p-4">
            
            <h2 className="text-3xl font-semibold mb-2 ">{article.title}</h2>
            {article.urlToImage && (
                <figure>
                    <img src={article.urlToImage} alt={article.title} className="w-fit h-auto mb-4" />
                </figure>
            )}
            <p className="mb-4">{article.content || article.description}</p>
            <p className="mb-2"><strong>Author:</strong> {article.author || "Unknown"}</p>
            <p className="mb-2"><strong>Source:</strong> {article.source.name}</p>
        </div>
    )
}
        
    
