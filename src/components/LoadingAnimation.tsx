
import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-40 h-40">
        {/* Sol animado */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-yellow-300 animate-pulse">
          {/* Raios do sol */}
          <div className="absolute w-8 h-2 bg-yellow-300 -left-6 top-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute w-8 h-2 bg-yellow-300 -right-6 top-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute h-8 w-2 bg-yellow-300 left-1/2 -top-6 -translate-x-1/2 animate-pulse"></div>
          <div className="absolute h-8 w-2 bg-yellow-300 left-1/2 -bottom-6 -translate-x-1/2 animate-pulse"></div>
          
          {/* Raios diagonais */}
          <div className="absolute w-6 h-2 bg-yellow-300 -left-5 top-1/4 -rotate-45 animate-pulse"></div>
          <div className="absolute w-6 h-2 bg-yellow-300 -right-5 top-1/4 rotate-45 animate-pulse"></div>
          <div className="absolute w-6 h-2 bg-yellow-300 -left-5 bottom-1/4 rotate-45 animate-pulse"></div>
          <div className="absolute w-6 h-2 bg-yellow-300 -right-5 bottom-1/4 -rotate-45 animate-pulse"></div>
        </div>
        
        {/* Rosto do sol */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 flex flex-col items-center justify-center">
          {/* Olhos */}
          <div className="flex space-x-4 mb-2">
            <div className="w-3 h-3 rounded-full bg-purple-900"></div>
            <div className="w-3 h-3 rounded-full bg-purple-900"></div>
          </div>
          {/* Boca */}
          <div className="w-8 h-4 border-b-4 border-purple-900 rounded-full"></div>
        </div>
        
        {/* Nuvens animadas */}
        <div className="absolute -bottom-10 -left-20 w-24 h-10">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-white"></div>
            <div className="absolute top-0 left-8 w-12 h-10 rounded-full bg-white"></div>
            <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white"></div>
          </div>
        </div>
        
        <div className="absolute -bottom-6 -right-16 w-20 h-8 animate-bounce">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-white"></div>
            <div className="absolute top-0 left-6 w-10 h-8 rounded-full bg-white"></div>
            <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary animate-pulse">Carregando...</h3>
        <p className="text-gray-400">Estamos preparando algo especial para você!</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
