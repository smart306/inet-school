import MarkDownStyl from "@/components/markdownstyl";
import { getArticle } from "@/lib/actions/news-page";
import Image from "next/image";

export default async function ArticlePage({params}){
    const {slug} = await params;
    const{ article } = await getArticle(slug);
    return (
      <section className="pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%] pb-16">
        <div className="my-container sm:space-y-2">
          <h1>{article.title}</h1>
          <div className="flex flex-row justify-between">
            <p>{article.author}</p>
            <p>{article.data}</p>
          </div>
          <div className="relative w-full h-[50vh] aspect-video">
            <Image
              src={article.image?.asset?.url}
              fill
              alt="p"
              className="object-contain"
            />
          </div>
          <MarkDownStyl className="sm:pt-2 space-y-2 px-8">{article.body}</MarkDownStyl>
        </div>
      </section>
    );
}