
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    imageUrl: string;
    videoCount: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/categoria/${category.id}`}
      className="relative overflow-hidden rounded-lg group block"
    >
      <div className="aspect-[4/3] bg-purple-100/10 overflow-hidden">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Overlay com informações */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent flex flex-col justify-end p-4">
        <h3 className="font-bold text-white text-lg">{category.name}</h3>
        <p className="text-white/70 text-sm">{category.videoCount} vídeos</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
