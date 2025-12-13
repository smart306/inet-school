"use client"
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function TeachersPage({ teachers }) {
    return (
      <section className="h-screen pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%]">
        <div className="my-container">
          <div className="grid grid-cols-4">
            {teachers.map((item) => (
              <Link key={item._id} href={`/teachersroom/${item.slug.current}`}>
                <Card
                  className={cn(
                    `w-full pb-2 lg:pb-8 gap-6 px-0 cursor-pointer flex flex-col justify-center text-center`,
                  )}
                >
                  <CardContent className="flex justify-center w-full min-h-[120px]">
                    <div className="relative w-full aspect-square md:aspect-video">
                      <Image
                        src={item.image?.asset?.url || "/Rectangle121.png"}
                        fill
                        alt="n"
                        className="object-contain w-full h-auto"
                      />
                    </div>
                  </CardContent>
                  <CardHeader className="w-full px-2">
                    <CardTitle className="h4! leading-[1.5]!">
                      {item.full_name}
                    </CardTitle>
                    <CardDescription className="p! leading-[1.5]!"></CardDescription>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
}