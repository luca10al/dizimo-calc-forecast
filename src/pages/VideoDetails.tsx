
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import VideoCarousel from "@/components/VideoCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Star } from "lucide-react";

const VideoDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isWatched, setIsWatched] = useState(false);
  
  // Dados simulados para exibição
  const videoDetails = {
    id: id || "1",
    title: "A Arca de Noé",
    description: "Nesta emocionante aventura, você vai conhecer a história de Noé, um homem que seguiu as instruções de Deus para construir uma enorme arca, salvando sua família e muitos animais do grande dilúvio. Uma história sobre obediência, fé e o cuidado de Deus com sua criação.",
    videoUrl: "https://www.example.com/videos/arca-de-noe.mp4",
    imageUrl: "/placeholder.svg",
    duration: "25 min",
    ageRating: "3+",
    releaseYear: "2023",
    category: "Histórias da Bíblia"
  };
  
  // Vídeos relacionados simulados
  const relatedVideos = [
    {
      id: "2",
      title: "Davi e Golias",
      imageUrl: "/placeholder.svg",
      duration: "18 min"
    },
    {
      id: "3",
      title: "Daniel na Cova dos Leões",
      imageUrl: "/placeholder.svg",
      duration: "22 min"
    },
    {
      id: "4",
      title: "Jonas e a Baleia",
      imageUrl: "/placeholder.svg",
      duration: "20 min"
    },
    {
      id: "5",
      title: "José e seus Irmãos",
      imageUrl: "/placeholder.svg",
      duration: "27 min"
    }
  ];

  const handleToggleWatched = () => {
    setIsWatched(!isWatched);
  };

  return (
    <div className="pb-12">
      {/* Video Player */}
      <div className="w-full aspect-video bg-black">
        <VideoPlayer videoUrl={videoDetails.videoUrl} posterUrl={videoDetails.imageUrl} />
      </div>
      
      {/* Video Info */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{videoDetails.title}</h1>
            
            <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
              <span>{videoDetails.duration}</span>
              <span>•</span>
              <span>{videoDetails.ageRating}</span>
              <span>•</span>
              <span>{videoDetails.releaseYear}</span>
              <span>•</span>
              <span>{videoDetails.category}</span>
            </div>
            
            <p className="mt-4 text-gray-300">{videoDetails.description}</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <Button 
              variant={isWatched ? "outline" : "default"}
              className={`${isWatched ? "border-green-500 text-green-500" : ""}`}
              onClick={handleToggleWatched}
            >
              {isWatched ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Assistido
                </>
              ) : "Marcar como assistido"}
            </Button>
            
            <Button variant="outline" className="border-yellow-500 text-yellow-500">
              <Star className="h-4 w-4 mr-2" />
              Favorito
            </Button>
          </div>
        </div>
        
        <Separator className="my-8 opacity-30" />
        
        {/* Vídeos relacionados */}
        <VideoCarousel 
          title="Mais histórias da Bíblia" 
          videos={relatedVideos} 
          viewAll="/categoria/biblia"
        />
      </div>
    </div>
  );
};

export default VideoDetails;
