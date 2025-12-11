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
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const data = [
    {
        _id: 1, 
        image: "/image4.png"
    }, 
    {
        _id: 2, 
        image: "/image3.png"
    }, 
    {
        _id: 3, 
        image: "/image5.png"
    }, 
    {
        _id: 4, 
        image: "/Rectangle12.png"
    }, 
    {
        _id: 5, 
        image: "/Rectangle12.png"
    }
]

export default function GalleryPage({ gallery }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [active, setActive] = useState(gallery[0]);
    const [api, setApi] = useState(null);

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        const selectedIndex = api.selectedScrollSnap();
        setActive(gallery[selectedIndex]);
      });
    }
  }, [api]);

  useEffect(() => {
    if (api) {
      const index = gallery.findIndex((item) => item._id === active._id);
      api.scrollTo(index);
    }
  }, [active, api]);
  return (
    <section className="h-fit py-[10%]">
      <div className="my-container">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <Card
                  key={item._id}
                  onClick={() => setActiveIndex(i)}
                  className={cn(`w-full gap-6 px-0 cursor-pointer`)}
                >
                  <CardContent className="flex justify-center w-full min-h-[120px]">
                    <div className="relative w-full aspect-square md:aspect-video">
                      <Image
                        src={item.image?.asset?.url}
                        fill
                        alt="p"
                        className="object-cover w-full h-auto"
                      />
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
                <Carousel
                  opts={{
                    loop: false,
                    slidesToScroll: 1,
                    containScroll: "trimSnaps",
                    align: "start",
                    skipSnaps: false,
                    dragFree: false,
                  }}
                  setApi={setApi}
                  className="lg:w-[90%]"
                >
                  <CarouselContent>
                    <CarouselItem
                      key={item._id}
                      className={cn(
                        "relative h-[280px] aspect-video inline-flex basis-full",
                      )}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={gallery[activeIndex].image?.asset?.url}
                          fill
                          alt="slide"
                          className="object-cover object-center"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="absolute flex flex-row w-full h-full">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "rounded-full mt-2",
                        activeIndex === 0 ? "pointer-events-none" : "",
                      )}
                      onClick={() =>
                        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
                      }
                    >
                      <Image
                        src="/fluent_ios-arrow-24-filled.svg"
                        width={20}
                        height={20}
                        alt="p"
                      />
                    </Button>
                    <div className="grid grid-cols-4 py-2">
                      {gallery.map((item, i) => (
                        <Button
                          key={i}
                          onClick={() => {
                            setActiveIndex(i);
                            api?.scrollTo(i);
                          }}
                          className={cn(
                            "relative aspect-video w-full h-auto overflow-hidden border",
                            activeIndex === i && "hidden",
                          )}
                        >
                          <Image
                            src={item.image?.asset?.url}
                            fill
                            alt="p"
                            className="object-cover"
                          />
                        </Button>
                      ))}
                    </div>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "rounded-full mt-2",
                        activeIndex === gallery.length - 1
                          ? "pointer-events-none"
                          : "",
                      )}
                      onClick={() =>
                        setActiveIndex((prev) =>
                          prev < gallery.length - 1 ? prev + 1 : prev,
                        )
                      }
                    >
                      <Image
                        src="/fluent_ios-arrow-24-filled.svg"
                        width={20}
                        height={20}
                        alt="p"
                        className="rotate-180"
                      />
                    </Button>
                  </div>
                  <DialogTitle className="hidden"></DialogTitle>
                  <DialogDescription className="hidden"></DialogDescription>
                </Carousel>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}