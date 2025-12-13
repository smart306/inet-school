import { getBio } from "@/lib/actions/teacher-page";
import Image from "next/image";

export default async function TeacherBio({params}){
    const {slug} = await params;
    const{ bio } = await getBio(slug);
    return (
      <section className="pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%] pb-16">
        <div className="my-container sm:space-y-2">
          <div className="py-4">
            <h1>{bio.full_name}</h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full h-[50vh] aspect-auto">
              <Image
                src={bio.image?.asset?.url || "/Rectangle121.png"}
                fill
                alt="p"
                className="object-contain"
              />
            </div>
            <div className="w-full flex flex-col justify-center">
              <div className="w-full flex flex-row justify-center border-b-2 py-4">
                <h1>{bio.full_name}</h1>
              </div>
              <div className="grid grid-cols-2 justify-center items-center space-y-4 md:space-x-16 py-4">
                <h4 className="text-[16px]!">Вчитель</h4>
                <p></p>
                <h4 className="text-[16px]!">Класний керівник</h4>
                <p>{bio.class_teacher}</p>
                <h4 className="text-[16px]!">Викладає</h4>
                <p>{bio.subjects.title}</p>
                <h4 className="text-[16px]!">Категорія</h4>
                <p>{bio.category}</p>
                <h4 className="text-[16px]!">Посада</h4>
                <p>{bio.position}</p>
                <h4 className="text-[16px]!">У школі працює з</h4>
                <p>{bio.started_working}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}