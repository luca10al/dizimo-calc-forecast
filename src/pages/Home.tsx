
import React from "react";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import CategoryCard from "@/components/CategoryCard"; 
import { Separator } from "@/components/ui/separator";

const Home = () => {
  // Dados simulados para exibição
  const featuredVideo = {
    id: "1",
    title: "A Arca de Noé",
    description: "Aventure-se com Noé e os animais na incrível história da grande arca que os salvou do dilúvio.",
    imageUrl: "/placeholder.svg",
    duration: "25 min"
  };

  const biblicalStories = [
    {
      id: "1",
      title: "A Arca de Noé",
      imageUrl: "/placeholder.svg",
      duration: "25 min"
    },
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
    },
    {
      id: "6",
      title: "Moisés e o Mar Vermelho",
      imageUrl: "/placeholder.svg",
      duration: "24 min"
    }
  ];

  const aboutJesus = [
    {
      id: "7",
      title: "O Nascimento de Jesus",
      imageUrl: "/placeholder.svg",
      duration: "21 min"
    },
    {
      id: "8",
      title: "Jesus e os Pescadores",
      imageUrl: "/placeholder.svg",
      duration: "19 min"
    },
    {
      id: "9",
      title: "Os Milagres de Jesus",
      imageUrl: "/placeholder.svg",
      duration: "23 min"
    },
    {
      id: "10",
      title: "A Parábola do Filho Pródigo",
      imageUrl: "/placeholder.svg",
      duration: "17 min"
    },
    {
      id: "11",
      title: "Jesus e as Crianças",
      imageUrl: "/placeholder.svg",
      duration: "15 min"
    }
  ];

  const learningVideos = [
    {
      id: "12",
      title: "Cores com Noé",
      imageUrl: "/placeholder.svg",
      duration: "15 min"
    },
    {
      id: "13",
      title: "Números com os Discípulos",
      imageUrl: "/placeholder.svg",
      duration: "14 min"
    },
    {
      id: "14",
      title: "Animais da Criação",
      imageUrl: "/placeholder.svg",
      duration: "16 min"
    },
    {
      id: "15",
      title: "Frutas do Jardim do Éden",
      imageUrl: "/placeholder.svg",
      duration: "12 min"
    }
  ];

  const categories = [
    {
      id: "biblia",
      name: "Histórias da Bíblia",
      imageUrl: "/placeholder.svg",
      videoCount: 24
    },
    {
      id: "jesus",
      name: "Desenhos sobre Jesus",
      imageUrl: "/placeholder.svg",
      videoCount: 18
    },
    {
      id: "dormir",
      name: "Para dormir",
      imageUrl: "/placeholder.svg",
      videoCount: 12
    },
    {
      id: "aprender",
      name: "Aprender brincando",
      imageUrl: "/placeholder.svg",
      videoCount: 16
    }
  ];

  return (
    <div>
      {/* Hero com vídeo em destaque */}
      <Hero featured={featuredVideo} />
      
      <div className="container mx-auto px-4 mt-12">
        {/* Seção de carrosséis */}
        <VideoCarousel 
          title="Histórias da Bíblia" 
          videos={biblicalStories}
          viewAll="/categoria/biblia" 
        />
        
        <VideoCarousel 
          title="Desenhos sobre Jesus" 
          videos={aboutJesus}
          viewAll="/categoria/jesus" 
        />
        
        <VideoCarousel 
          title="Aprender brincando" 
          videos={learningVideos}
          viewAll="/categoria/aprender" 
        />
        
        {/* Separador */}
        <Separator className="my-10 opacity-30" />
        
        {/* Categorias */}
        <div>
          <h2 className="text-xl font-bold mb-6">Explore por Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
