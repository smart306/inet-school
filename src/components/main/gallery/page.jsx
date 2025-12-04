"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const data = [
  {
    id: 1,
    image: "/image3.png",
  },
  {
    id: 2,
    image: "/image4.png",
  },
  {
    id: 3,
    image: "/image5.png",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(data[0]);
  const [api, setApi] = useState(null);
  useEffect(() => {
    if (api) {
      api.on("select", () => {
        const selectedIndex = api.selectedScrollSnap();
        setActive(data[selectedIndex]);
      });
    }
  }, [api]);

  useEffect(() => {
    if (api) {
      const index = data.findIndex((item) => item.id === active.id);
      api.scrollTo(index);
    }
  }, [active, api]);

  return (
    <div className="items-center w-full space-y-8 lg:space-y-10 overflow-x-hidden">
      <div className="my-container space-y-10 lg:space-x-2 lg:space-y-2 xl:flex xl:flex-row">
        <div className="w-full space-y-4 lg:space-x-10 sm:flex sm:flex-row sm:justify-center sm:items-center">
          <Carousel
            opts={{
              loop: true,
              dragFree: false,
              containScroll: "trimSnaps",
              slidesToScroll: 1,
            }}
            setApi={setApi}
            className="lg:w-[90%]"
          >
            <CarouselContent>
              {data.map((item, i) => (
                <CarouselItem
                  key={item.id}
                  className={cn(
                    "h-[168px] lg:h-[280px] aspect-video relative inline-flex basis-auto",
                  )}
                  onClick={() => setActive(item)}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Image
                        src={item.image}
                        alt="p"
                        fill
                        className="object-cover mx-auto object-center h-full cursor-pointer"
                        onClick={() => setActive(item)}
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-transparent shadow-none rounded-none border-0 max-w-full max-h-full">
                      <DialogTitle>Назва діалогу</DialogTitle>
                      <DialogDescription>
                        Опис для користувачів скрінрідерів
                      </DialogDescription>
                      <Image
                        src={item.image}
                        alt="p"
                        width={400}
                        height={400}
                        className="object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={"hidden"} />
            <CarouselNext className={"hidden"} />
          </Carousel>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <Button variant={"outline"} className="items-center text-[16px]">
            Галерея{" "}
            <Image src="/RightCircle.svg" width={14} height={14} alt="p" />
          </Button>
        </div>
      </div>
    </div>
  );
}
