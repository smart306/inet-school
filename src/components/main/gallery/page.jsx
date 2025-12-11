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
import { useRouter } from "next/navigation";

export default function Gallery({ gallery }) {
  const [active, setActive] = useState(gallery[0]);
  const [api, setApi] = useState(null);
  const router = useRouter();

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
              {gallery.map((item, i) => (
                <CarouselItem
                  key={item._id}
                  className={cn(
                    "h-[168px] lg:h-[280px] aspect-video relative inline-flex basis-auto",
                  )}
                  onClick={() => setActive(item)}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Image
                        src={item.image?.asset?.url || "/Rectangle12.png"}
                        alt="p"
                        fill
                        className="object-cover mx-auto object-center h-full cursor-pointer"
                        onClick={() => setActive(item)}
                      />
                    </DialogTrigger>
                    <DialogContent className="aspect-video bg-transparent shadow-none rounded-none border-0 w-full">
                      <DialogTitle>Назва діалогу</DialogTitle>
                      <DialogDescription>
                        Опис для користувачів скрінрідерів
                      </DialogDescription>
                      <Image
                        src={item.image?.asset?.url || "/Rectangle12.png"}
                        alt="p"
                        fill
                        className="object-cover"
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