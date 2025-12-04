import About from "@/components/main/about/page";
import Gallery from "@/components/main/gallery/page";
import Header from "@/components/main/header/page";
import News from "@/components/main/news/news";
import { getHomePage } from "@/lib/actions/home-page";

export default async function Home() {
  const { header, news } = await getHomePage();

  console.log("Home Page Data:", header, news);

  return (
    <div className="space-y-16">
      <Header header={header} />
      <About />
      <Gallery />
      <News news={news} />
    </div>
  );
}
