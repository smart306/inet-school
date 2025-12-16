import About from "@/components/main/about/page";
import Gallery from "@/components/main/gallery/page";
import Header from "@/components/main/header/page";
import News from "@/components/main/news/news";
import { getHomePage } from "@/lib/actions/home-page";

export const metadata = {
  title: "Головна - Ільницький спортивно-гуманітарний ліцей",
  description: "Ільницький спортивно-гуманітарний ліцей забезпечує якісну освіту, розвиток спортивних здібностей, гуманітарних навичок та гармонійний розвиток особистості.",
};

export default async function Home() {
  const { header, news, gallery } = await getHomePage();

  return (
    <div className="space-y-6 lg:space-y-16">
      <Header header={header} />
      <About />
      <Gallery gallery={gallery}/>
      <News news={news} />
    </div>
  );
}
