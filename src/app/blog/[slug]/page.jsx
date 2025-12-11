import { getArticle } from "@/lib/actions/news-page";

export default async function ArticlePage({params}){
    const {slug} = await params;
    const{ article } = await getArticle(slug);
    return(
        <section className="pt-35">123 {slug}</section>
    )
}