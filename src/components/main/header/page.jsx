"use client";
import Image from "next/image";

 
export default function Header(){
    return (
      <div className="max-w-full pb-16">
        <div className="w-full h-[50vh] md:max-h-screen">
          <Image
            src="/header.png"
            height={1920}
            width={1920}
            alt="b"
            className="object-top object-cover h-full w-full lg:w-full lg:h-auto -z-10"
          />
        </div>
        <div className="my-container relative">
          <div className="bg-nav absolute -bottom-16 2xl:w-[35%] xl:bottom-30 xl:left-5 sm:center lg:bottom-5 lg:left-65 md:left-50 sm:left-40 md:w-[47%] sm:w-[50%] inset-x-2 py-6 px-10 lg:py-6 lg:px-6 rounded-2xl">
            <h2>Ільницький спортивно-гуманітарний ліцей</h2>
          </div>
        </div>
      </div>
    );
}