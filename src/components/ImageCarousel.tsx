"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/image-01.jpeg",
    title: "Interactive Learning Environment",
    description:
      "Specialized classrooms designed for optimal learning experiences",
  },
  {
    src: "/images/image-02.jpeg",
    title: "One-on-One Therapy Sessions",
    description: "Personalized attention for every child's unique needs",
  },
  {
    src: "/images/image-03.jpeg",
    title: "Group Activities",
    description: "Building social skills through structured group interactions",
  },
  {
    src: "/images/image-04.jpeg",
    title: "Sensory Integration Room",
    description: "Specialized space for sensory processing development",
  },
  {
    src: "/images/image-05.jpeg",
    title: "Parent Training Sessions",
    description: "Empowering families with tools and strategies",
  },
];

export default function ImageCarousel() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Badge
                        variant="secondary"
                        className="mb-3 bg-white/20 text-white border-white/30"
                      >
                        {index + 1} of {images.length}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 font-poppins">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current - 1
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
