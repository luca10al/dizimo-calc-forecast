
import React from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    imageUrl: string;
    duration: string;
    description?: string;
  };
  size?: "small" | "medium" | "large";
}

const VideoCard = ({ video, size = "medium" }: VideoCardProps) => {
  const sizeClasses = {
    small: "w-[160px] md:w-[200px]",
    medium: "w-[220px] md:w-[260px]",
    large: "w-[280px] md:w-[320px]",
  };

  return (
    <div className={`${sizeClasses[size]} flex flex-col`}>
      <Link to={`/video/${video.id}`} className="group relative rounded-lg overflow-hidden">
        <div className="aspect-video bg-purple-100/10 rounded-lg">
          <img 
            src={video.imageUrl} 
            alt={video.title}
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>
        
        {/* Overlay com play */}
        <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-5 w-5 text-white" />
          </div>
        </div>
        
        {/* Duração */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </Link>
      
      <div className="mt-2">
        <h3 className="font-medium text-base line-clamp-1">{video.title}</h3>
        {video.description && (
          <p className="text-sm text-gray-400 mt-1 line-clamp-2">{video.description}</p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
