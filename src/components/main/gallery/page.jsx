"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import * as React from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
export default function Gallery({ gallery }) {
   const [active, setActive] = useState(data[0]);
      const [api, setApi] = React.useState(null);
      const [current, setCurrent] = React.useState(0);
  const router = useRouter();
      React.useEffect(() => {
        if (!api) return;
  
        setCurrent(api.selectedScrollSnap() + 1);
  
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1);
        });
      }, [api]);
  
      const handleThumbClick = React.useCallback(
        (item) => {
          const index = data.findIndex((el) => el._id === item._id);
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
          setActive(data[selectedIndex]);
        });
      }, [api]);
  
      useEffect(() => {
        if (!api) return;
  
        const index = data.findIndex((item) => item._id === active._id);
        api.scrollTo(index);
      }, [active, api]);

  return (
    <div className="items-center w-full space-y-8 lg:space-y-10 overflow-x-hidden">
      <div className="my-container space-y-10 w-full lg:flex lg:flex-row">
        <div className="flex-1 lg:flex lg:flex-row space-y-4 lg:w-[90%]">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
              align: "start",
              slidesToScroll: 1,
            }}
            setApi={setApi}
            className="lg:w-[90%]"
          >
            <CarouselContent>
              {data.map((item, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <CarouselItem
                      className={cn(
                        "h-[168px] lg:h-[280px] aspect-video relative inline-flex basis-auto",
                      )}
                      onClick={() => setActive(item)}
                    >
                      <Image
                        src={item.image || "/Rectangle12.png"}
                        alt="p"
                        fill
                        className="object-cover mx-auto object-center h-full cursor-pointer"
                        onClick={() => setActive(item)}
                      />
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="w-full bg-transparent items-center shadow-none rounded-none border-0 max-h-full">
                    <div className="w-full h-full">
                      <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                          {data.map((item, i) => (
                            <CarouselItem key={i}>
                              <Card>
                                <CardContent className="flex aspect-video items-center justify-center">
                                  <div className="relative w-full h-full">
                                    <Image
                                      src={item.image}
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
                          {data.map((item, i) => (
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
                                      src={item.image}
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
            </CarouselContent>
            <CarouselPrevious className={"hidden"} />
            <CarouselNext className={"hidden"} />
          </Carousel>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Button
            variant={"outline"}
            className="items-center text-[16px]"
            onClick={() => router.push("/gallerypage")}
          >
            Галерея
            <Image src="/RightCircle.svg" width={14} height={14} alt="p" />
          </Button>
        </div>
      </div>
    </div>
  );
}