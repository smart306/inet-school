import About from "@/components/main/about/page";
import Gallery from "@/components/main/gallery/page";
import Header from "@/components/main/header/page";
import News from "@/components/main/news/news";

export default function Home() {
  return (
   <div className="space-y-16">
    <Header/>
    <About/>
    <Gallery/>
    <News/>
   </div>
  );
}
