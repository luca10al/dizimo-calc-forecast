
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "@/components/VideoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategoryVideos = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mapeamento de categorias para títulos
  const categoryMap: { [key: string]: string } = {
    "biblia": "Histórias da Bíblia",
    "jesus": "Desenhos sobre Jesus",
    "dormir": "Para dormir",
    "aprender": "Aprender brincando",
    "anjos": "Anjos e Querubins",
    "oracoes": "Orações Animadas",
    "santos": "Vida dos Santos",
    "parabolas": "Parábolas de Jesus"
  };
  
  // Dados simulados para vídeos
  const categoryVideos = {
    "biblia": [
      {
        id: "1",
        title: "A Arca de Noé",
        imageUrl: "/placeholder.svg",
        duration: "25 min",
        ageGroup: "all"
      },
      {
        id: "2",
        title: "Davi e Golias",
        imageUrl: "/placeholder.svg",
        duration: "18 min",
        ageGroup: "older"
      },
      {
        id: "3",
        title: "Daniel na Cova dos Leões",
        imageUrl: "/placeholder.svg",
        duration: "22 min",
        ageGroup: "all"
      },
      {
        id: "4",
        title: "Jonas e a Baleia",
        imageUrl: "/placeholder.svg",
        duration: "20 min",
        ageGroup: "young"
      },
      {
        id: "5",
        title: "José e seus Irmãos",
        imageUrl: "/placeholder.svg",
        duration: "27 min",
        ageGroup: "older"
      },
      {
        id: "6",
        title: "Moisés e o Mar Vermelho",
        imageUrl: "/placeholder.svg",
        duration: "24 min",
        ageGroup: "all"
      },
      {
        id: "7",
        title: "A Torre de Babel",
        imageUrl: "/placeholder.svg",
        duration: "19 min",
        ageGroup: "older"
      },
      {
        id: "8",
        title: "A Criação do Mundo",
        imageUrl: "/placeholder.svg",
        duration: "26 min",
        ageGroup: "young"
      }
    ],
    "jesus": [
      {
        id: "9",
        title: "O Nascimento de Jesus",
        imageUrl: "/placeholder.svg",
        duration: "21 min",
        ageGroup: "all"
      },
      {
        id: "10",
        title: "Jesus e os Pescadores",
        imageUrl: "/placeholder.svg",
        duration: "19 min",
        ageGroup: "all"
      },
      {
        id: "11",
        title: "Os Milagres de Jesus",
        imageUrl: "/placeholder.svg",
        duration: "23 min",
        ageGroup: "all"
      },
      {
        id: "12",
        title: "A Parábola do Filho Pródigo",
        imageUrl: "/placeholder.svg",
        duration: "17 min",
        ageGroup: "older"
      },
      {
        id: "13",
        title: "Jesus e as Crianças",
        imageUrl: "/placeholder.svg",
        duration: "15 min",
        ageGroup: "young"
      }
    ],
    "aprender": [
      {
        id: "14",
        title: "Cores com Noé",
        imageUrl: "/placeholder.svg",
        duration: "15 min",
        ageGroup: "young"
      },
      {
        id: "15",
        title: "Números com os Discípulos",
        imageUrl: "/placeholder.svg",
        duration: "14 min",
        ageGroup: "young"
      },
      {
        id: "16",
        title: "Animais da Criação",
        imageUrl: "/placeholder.svg",
        duration: "16 min",
        ageGroup: "young"
      },
      {
        id: "17",
        title: "Frutas do Jardim do Éden",
        imageUrl: "/placeholder.svg",
        duration: "12 min",
        ageGroup: "young"
      }
    ]
  };
  
  // Videos padrão para categorias não mapeadas
  const defaultVideos = [
    {
      id: "101",
      title: "Vídeo de demonstração 1",
      imageUrl: "/placeholder.svg",
      duration: "10 min",
      ageGroup: "all"
    },
    {
      id: "102",
      title: "Vídeo de demonstração 2",
      imageUrl: "/placeholder.svg",
      duration: "12 min",
      ageGroup: "young"
    },
    {
      id: "103",
      title: "Vídeo de demonstração 3",
      imageUrl: "/placeholder.svg",
      duration: "15 min",
      ageGroup: "older"
    }
  ];
  
  // Obter vídeos para a categoria atual
  const videos = (id && categoryVideos[id as keyof typeof categoryVideos]) || defaultVideos;
  
  // Filtrando vídeos por pesquisa
  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Filtrando por grupo etário
  const getFilteredVideosByAge = (ageGroup: string) => {
    if (ageGroup === "all") return filteredVideos;
    return filteredVideos.filter(video => 
      video.ageGroup === ageGroup || video.ageGroup === "all"
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        {id ? categoryMap[id] || id : "Categoria"}
      </h1>
      
      {/* Barra de pesquisa */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Pesquisar vídeos..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Tabs por idade */}
      <Tabs defaultValue="all">
        <TabsList className="mb-8">
          <TabsTrigger value="all">Todos os vídeos</TabsTrigger>
          <TabsTrigger value="young">3-6 anos</TabsTrigger>
          <TabsTrigger value="older">7-10 anos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-400">Nenhum vídeo encontrado.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="young">
          {getFilteredVideosByAge("young").length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {getFilteredVideosByAge("young").map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-400">Nenhum vídeo encontrado para essa faixa etária.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="older">
          {getFilteredVideosByAge("older").length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {getFilteredVideosByAge("older").map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-400">Nenhum vídeo encontrado para essa faixa etária.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CategoryVideos;
