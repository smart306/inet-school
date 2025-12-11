import NewsPage from "@/components/news";
import { getNews } from "@/lib/actions/news-page"

export default async function NewsMain(){
    const { news } = await getNews(); 

    return(
        <div>
            <NewsPage news={news}/>
        </div>
    )
}