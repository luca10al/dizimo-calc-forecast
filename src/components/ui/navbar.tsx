
import React, { useState } from "react";
import { Search, User, Home, Book, Video, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./input";
import { Button } from "./button";

export function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery)}`);
      setSearchVisible(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-purple-900/90 to-purple-900/70 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-white">
            <span className="text-primary">Cate</span>Club
          </span>
        </Link>

        <div className={`transition-all duration-300 ${searchVisible ? "w-full max-w-md mx-4" : "w-0 overflow-hidden"}`}>
          {searchVisible && (
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Pesquisar desenhos..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
            </form>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSearchVisible(!searchVisible)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Pesquisar"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
          <Link to="/categorias" className="p-2 rounded-full hover:bg-white/10 transition-colors hidden md:flex">
            <Book className="h-5 w-5 text-white" />
          </Link>
          <Link to="/videos" className="p-2 rounded-full hover:bg-white/10 transition-colors hidden md:flex">
            <Video className="h-5 w-5 text-white" />
          </Link>
          <Link to="/login" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <User className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>

      {/* Menu móvel */}
      <div className="md:hidden border-t border-white/10">
        <div className="flex justify-around py-2">
          <Link to="/" className="flex flex-col items-center p-1 text-white/70 hover:text-white">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Início</span>
          </Link>
          <Link to="/categorias" className="flex flex-col items-center p-1 text-white/70 hover:text-white">
            <Book className="h-5 w-5" />
            <span className="text-xs mt-1">Categorias</span>
          </Link>
          <Link to="/videos" className="flex flex-col items-center p-1 text-white/70 hover:text-white">
            <Video className="h-5 w-5" />
            <span className="text-xs mt-1">Vídeos</span>
          </Link>
          <Link to="/config" className="flex flex-col items-center p-1 text-white/70 hover:text-white">
            <Settings className="h-5 w-5" />
            <span className="text-xs mt-1">Ajustes</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
