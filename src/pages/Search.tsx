
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "@/components/VideoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Dados simulados para pesquisa
  const allVideos = [
    {
      id: "1",
      title: "A Arca de Noé",
      imageUrl: "/placeholder.svg",
      duration: "25 min",
      ageGroup: "all",
      category: "Histórias da Bíblia"
    },
    {
      id: "2",
      title: "Davi e Golias",
      imageUrl: "/placeholder.svg",
      duration: "18 min",
      ageGroup: "older",
      category: "Histórias da Bíblia"
    },
    {
      id: "7",
      title: "O Nascimento de Jesus",
      imageUrl: "/placeholder.svg",
      duration: "21 min",
      ageGroup: "all",
      category: "Desenhos sobre Jesus"
    },
    {
      id: "8",
      title: "Jesus e os Pescadores",
      imageUrl: "/placeholder.svg",
      duration: "19 min",
      ageGroup: "all",
      category: "Desenhos sobre Jesus"
    },
    {
      id: "12",
      title: "Cores com Noé",
      imageUrl: "/placeholder.svg",
      duration: "15 min",
      ageGroup: "young",
      category: "Aprender brincando"
    },
    {
      id: "13",
      title: "Números com os Discípulos",
      imageUrl: "/placeholder.svg",
      duration: "14 min",
      ageGroup: "young",
      category: "Aprender brincando"
    },
  ];
  
  useEffect(() => {
    const performSearch = () => {
      setIsLoading(true);
      
      // Simulação de pesquisa
      setTimeout(() => {
        const filtered = allVideos.filter(video => 
          video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setResults(filtered);
        setIsLoading(false);
      }, 500);
    };
    
    if (searchQuery) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [searchQuery]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Atualizar URL para refletir a pesquisa
    const newUrl = `/busca?q=${encodeURIComponent(searchQuery)}`;
    window.history.pushState({}, "", newUrl);
  };
  
  // Filtrando por grupo etário
  const getFilteredVideosByAge = (ageGroup: string) => {
    if (ageGroup === "all") return results;
    return results.filter(video => 
      video.ageGroup === ageGroup || video.ageGroup === "all"
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        {searchQuery ? `Resultados para "${searchQuery}"` : "Buscar desenhos"}
      </h1>
      
      {/* Barra de pesquisa */}
      <form onSubmit={handleSearch} className="relative mb-8">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Pesquisar por título ou categoria..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      
      {/* Resultados */}
      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-bounce text-primary">Buscando...</div>
        </div>
      ) : (
        <>
          {results.length > 0 ? (
            <Tabs defaultValue="all">
              <TabsList className="mb-8">
                <TabsTrigger value="all">Todos os resultados</TabsTrigger>
                <TabsTrigger value="young">3-6 anos</TabsTrigger>
                <TabsTrigger value="older">7-10 anos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {results.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="young">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {getFilteredVideosByAge("young").map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="older">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {getFilteredVideosByAge("older").map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          ) : searchQuery ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">
                Nenhum resultado encontrado para "{searchQuery}"
              </h3>
              <p className="text-gray-400">
                Tente procurar usando palavras diferentes ou navegue por categorias.
              </p>
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">
                O que você gostaria de assistir hoje?
              </h3>
              <p className="text-gray-400">
                Digite acima para buscar desenhos cristãos divertidos!
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
