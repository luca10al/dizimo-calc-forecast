
import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  description?: string;
}

interface VideoCarouselProps {
  title: string;
  videos: Video[];
  viewAll?: string;
}

const VideoCarousel = ({ title, videos, viewAll }: VideoCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75;
    
    carouselRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {viewAll && (
          <a href={viewAll} className="text-primary text-sm hover:underline">
            Ver todos
          </a>
        )}
      </div>
      
      <div className="relative group">
        {/* Botões de navegação */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        
        <button 
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Próximo"  
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
        
        {/* Carrossel */}
        <div 
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto scrollbar-none py-4 px-1 -mx-1 snap-x"
        >
          {videos.map((video) => (
            <div key={video.id} className="snap-start">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
