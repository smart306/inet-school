"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NewsPage({ news }) {
  return (
    <section className="h-[80vh] pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%]">
      <div className="my-container">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-20">
          {news.map((item) => (
            <Link key={item._id} href={`/blog/${item.slug.current}`}>
              <Card
                className={cn(`w-full pb-2 lg:pb-8 gap-6 px-0 cursor-pointer`)}
              >
                <CardContent className="flex justify-center w-full min-h-[120px]">
                  <div className="relative w-full aspect-square md:aspect-video">
                    <Image
                      src={item.image?.asset?.url}
                      fill
                      alt="n"
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </CardContent>
                <CardHeader className="w-full px-2">
                  <CardTitle className="h4! leading-[1.5]!">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="p! leading-[1.5]!">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-row justify-between items-center gap-3">
                  <div className="flex flex-row justify-center items-center">
                    {item.author && (
                      <>
                        <Image
                          src={
                            item.author?.image?.asset?.url
                          }
                          width={18}
                          height={18}
                          alt="b"
                          className="rounded-full"
                        />
                        <h3 className="text-nav text-[8px]! lg:text-[14px]! font-[700]! leading-[1.3]">
                          {item.author?.full_name}
                        </h3>
                      </>
                    )}
                  </div>
                  <h3 className="text-nav text-[8px]! lg:text-[14px]! font-[700]! leading-[1.3]">
                    {item._createdAt.split("T")[0]}
                  </h3>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}