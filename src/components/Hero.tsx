
import React from "react";
import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  featured: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    duration: string;
  };
}

const Hero = ({ featured }: HeroProps) => {
  return (
    <div className="relative w-full h-[70vh] min-h-[400px] overflow-hidden rounded-b-3xl">
      {/* Imagem de fundo com gradiente */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featured.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/70 to-transparent" />
      </div>
      
      {/* Conteúdo */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col items-start">
        <span className="bg-primary/80 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
          Destaque
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
          {featured.title}
        </h1>
        <p className="text-white/90 text-sm md:text-base max-w-md mb-4 drop-shadow">
          {featured.description}
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Button asChild className="flex items-center gap-2 bg-primary hover:bg-primary/80">
            <Link to={`/video/${featured.id}`}>
              <Play className="h-5 w-5" />
              Assistir agora
            </Link>
          </Button>
          <span className="text-white/70 text-sm">{featured.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
