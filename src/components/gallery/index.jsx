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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import * as React from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
const data = [
  {
    _id: 1,
    image: "/image4.png",
    title: "aaaaa",
    data: "01.01.2000",
  },
  {
    _id: 2,
    image: "/image3.png",
    title: "aaaaa",
    data: "01.01.2000",
  },
  {
    _id: 3,
    image: "/image5.png",
    title: "aaaaa",
    data: "01.01.2000",
  },
  {
    _id: 4,
    image: "/Rectangle12.png",
    title: "aaaaa",
    data: "01.01.2000",
  },
  {
    _id: 5,
    image: "/Rectangle12.png",
    title: "aaaaa",
    data: "01.01.2000",
  },
];

export default function GalleryPage({ gallery }) {
    const [active, setActive] = useState(gallery[0]);
    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;

      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);

    const handleThumbClick = React.useCallback(
      (item) => {
        const index = gallery.findIndex((el) => el._id === item._id);
        if (index !== -1) {
          api?.scrollTo(index);
          setActive(item);
        }
      },
      [api],
    );

    useEffect(() => {
      if (!api) return;

      api.on("select", () => {
        const selectedIndex = api.selectedScrollSnap();
        setActive(gallery[selectedIndex]);
      });
    }, [api]);

    useEffect(() => {
      if (!api) return;

      const index = gallery.findIndex((item) => item._id === active._id);
      api.scrollTo(index);
    }, [active, api]);
    
    return (
      <section className="h-screen pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%]">
        <div className="my-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.map((item, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <Card
                    key={item._id}
                    onClick={() => setActive(item)}
                    className={cn(`w-full gap-6 px-0 cursor-pointer`)}
                  >
                    <CardContent className="flex flex-col text-left w-full min-h-[120px]">
                      <div className="relative w-full aspect-square xl:aspect-video">
                        <Image
                          src={item.image?.asset?.url}
                          fill
                          alt="p"
                          className="object-cover w-full h-auto rounded-2xl"
                        />
                      </div>
                      <div className="w-full">
                        <h1 className="text-[14px]!">{item.title}</h1>
                        <p className="text-[10px]!">{item.data}</p>
                      </div>
                    </CardContent>
                    <CardHeader className="hidden">
                      <CardTitle></CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <CardFooter className="hidden"></CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className="w-full bg-transparent items-center shadow-none rounded-none border-0 max-h-full">
                  <div className="w-full h-full">
                    <Carousel setApi={setApi} className="w-full">
                      <CarouselContent>
                        {gallery.map((item, i) => (
                          <CarouselItem key={i}>
                            <Card>
                              <CardContent className="flex aspect-video items-center justify-center">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={item.image?.asset?.url}
                                    fill
                                    alt="slide"
                                    className="object-cover object-center"
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>

                    <Carousel className="mt-2 w-full relative px-2">
                      <CarouselContent className="flex gap-1">
                        {gallery.map((item, i) => (
                          <CarouselItem
                            key={i}
                            className={cn(
                              "basis-1/4 cursor-pointer pl-0!",
                              current === i + 1 ? "hidden" : "",
                            )}
                            onClick={() => handleThumbClick(item)}
                          >
                            <Card>
                              <CardContent className="flex aspect-video items-center justify-center p-0">
                                <Button
                                  key={i}
                                  onClick={() => {
                                    setActive(i);
                                    api?.scrollTo(i);
                                  }}
                                  className={cn(
                                    "relative w-full h-full overflow-hidden border border-gray-200 rounded-lg",
                                  )}
                                >
                                  <Image
                                    src={item.image?.asset?.url}
                                    fill
                                    alt="p"
                                    className="object-cover"
                                  />
                                </Button>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="bg-linear-to-r from-black to-transparent absolute z-10 top-1/2 -translate-y-1/2 left-2 text-white py-[7%] rounded-none px-2 border-0 cursor-pointer hover:bg-linear-to-l hover:from-transparent hover:to-white" />
                      <CarouselNext className="absolute z-10 top-1/2 -translate-y-1/2 right-2 text-white bg-linear-to-l from-black to-transparent rounded-none py-[7%] px-2  border-0 hover:bg-linear-to-l hover:from-transparent hover:to-white" />
                    </Carousel>
                  </div>
                  <DialogTitle className="hidden"></DialogTitle>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    );
}