"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
    const data = [
      {
        id: 1,
        name: "Елеектронний кабінет",
        image: "/Group29.svg",
      },
      {
        id: 2,
        name: "Відгуки та питання",
        image: "/Group32.svg",
      },
      {
        id: 3,
        name: "Відгуки та питання",
        image: "/Group32.svg",
      },
      {
        id: 4,
        name: "Елеектронний кабінет",
        image: "/Group29.svg",
      },
    ];
  return (
    <div className="pt-16">
      <div className="my-container py-6 space-y-16 lg:space-x-16 lg:flex lg:flex-row">
        <div className="flex flex-row justify-center items-center lg:w-[50%]">
          <div className="pr-[8px] lg:pr-6 py-6 px-6 flex flex-col justify-center items-center gap-[12px]">
            <div className="max-w-[80px] max-h-[80px]">
              <Image
                src="/school_2602412.svg"
                width={80}
                height={80}
                alt="school"
                className="lg:w-[80px] lg:h-[80px]"
              />
            </div>
            <Button variant={"secondary"}>
              <Image
                src="/LeftCircle.svg"
                width={20}
                height={20}
                alt="circle"
                className="lg:w-[20px] lg:h-[20px]"
              />
              Про школу
            </Button>
          </div>
          <div className="border-l-[1] border-l-gray-400 pl-[8px] lg:pl-6 py-4 px-4">
            <h4>Про школу</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper ultricies velit sit amet semper. Integer at nisl ac purus
              placerat mollis ...
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-4 sm:grid-cols-3 sm:grid-rows-3">
          {data &&
            data.map((item, i) => (
              <div
                key={item.id}
                className={`gap-2 flex flex-col justify-center items-center xl:row-start-1 ${item.id === 1 ? "sm:col-start-2 sm:row-start-1 lg:col-start-1 xl:col-start-1" : ""} ${item.id === 2 ? "sm:row-start-2 sm:col-start-1 lg:col-start-2 lg:row-start-1 xl:col-start-2" : ""} ${item.id === 3 ? "sm:row-start-3 sm:col-start-2 lg:col-start-1 lg:row-start-2 xl:col-start-4" : ""} ${item.id === 4 ? "sm:row-start-2 sm:col-start-3 lg:col-start-2 lg:row-start-2 xl:col-start-3" : ""}`}
              >
                <Image src={item.image} width={57} height={57} alt="icon" />
                <h5 className="text-center">{item.name}</h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}