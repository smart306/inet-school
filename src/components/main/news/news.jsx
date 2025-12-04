"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { LucideHeading6 } from "lucide-react";
import Image from "next/image"

const data = [
    {
        id:1, 
        image: "/Rectangle12.png", 
        name: "Вільні творять майбуття", 
        description: "Цього листопада виповнюється 10 років від початку Революції Гідності ...", 
        authorpfp: "/Ellipse36.svg", 
        author: "Свищо Катерина", 
        time: "10.11.2023"
    }, 
    {
        id:2, 
        image: "/Rectangle12.png", 
        name: "Вільні творять майбуття", 
        description: "Цього листопада виповнюється 10 років від початку Революції Гідності ...", 
        authorpfp: "/Ellipse36.svg", 
        author: "Свищо Катерина", 
        time: "10.11.2023"
    }, 
    {
        id:3, 
        image: "/Rectangle12.png", 
        name: "Вільні творять майбуття", 
        description: "Цього листопада виповнюється 10 років від початку Революції Гідності ...", 
        authorpfp: "/Ellipse36.svg", 
        author: "Свищо Катерина", 
        time: "10.11.2023"
    }, 
    {
        id:4, 
        image: "/Rectangle12.png", 
        name: "Вільні творять майбуття", 
        description: "Цього листопада виповнюється 10 років від початку Революції Гідності ...", 
        authorpfp: "/Ellipse36.svg", 
        author: "Свищо Катерина", 
        time: "10.11.2023"
    }
]
export default function News(){
    return (
      <div className="py-6 lg:py-16">
        <div className="my-container space-y-6">
          <h1>Новини</h1>
          <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-2 md:gap-20">
            {data.map((item) => (
              <Card
                key={item.id}
                className={cn(
                  `w-full pb-8 gap-6 px-0`,
                  item.id === 4 ? "lg:hidden" : "",
                )}
              >
                <CardContent className="flex justify-center w-full min-h-[120px]">
                  <Image
                    src={item.image}
                    height={1920}
                    width={1920}
                    alt="b"
                    className="object-cover w-full h-auto"
                  />
                </CardContent>
                <CardHeader className="w-full px-2">
                  <CardTitle className="h4! leading-[1.5]!">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="p! leading-[1.5]!">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-row justify-around lg:justify-start items-center gap-3">
                  <div className="flex flex-row justify-center items-center">
                    <Image
                      src={item.authorpfp}
                      width={18}
                      height={18}
                      alt="b"
                      className="rounded-full"
                    />
                    <h3 className="text-nav text-[8px]! lg:text-[14px]! font-[700]! leading-[1.3]">
                      {item.author}
                    </h3>
                  </div>
                  <h3 className="text-nav text-[8px]! lg:text-[14px]! font-[700]! leading-[1.3]">
                    {item.time}
                  </h3>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="w-full flex flex-row justify-center items-center">
            <Button variant={"primary"}>
              Більше новин{" "}
              <Image src="/LeftCircle.svg" width={14} height={14} alt="b" />
            </Button>
          </div>
        </div>
      </div>
    );
}