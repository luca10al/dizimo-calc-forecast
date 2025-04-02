
import React, { useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Dados simulados para categorias
  const allCategories = [
    {
      id: "biblia",
      name: "Histórias da Bíblia",
      imageUrl: "/placeholder.svg",
      videoCount: 24,
      ageGroup: "all"
    },
    {
      id: "jesus",
      name: "Desenhos sobre Jesus",
      imageUrl: "/placeholder.svg",
      videoCount: 18,
      ageGroup: "all"
    },
    {
      id: "dormir",
      name: "Para dormir",
      imageUrl: "/placeholder.svg",
      videoCount: 12,
      ageGroup: "all"
    },
    {
      id: "aprender",
      name: "Aprender brincando",
      imageUrl: "/placeholder.svg",
      videoCount: 16,
      ageGroup: "young"
    },
    {
      id: "anjos",
      name: "Anjos e Querubins",
      imageUrl: "/placeholder.svg",
      videoCount: 8,
      ageGroup: "young"
    },
    {
      id: "oracoes",
      name: "Orações Animadas",
      imageUrl: "/placeholder.svg",
      videoCount: 14,
      ageGroup: "young"
    },
    {
      id: "santos",
      name: "Vida dos Santos",
      imageUrl: "/placeholder.svg",
      videoCount: 20,
      ageGroup: "older"
    },
    {
      id: "parabolas",
      name: "Parábolas de Jesus",
      imageUrl: "/placeholder.svg",
      videoCount: 15,
      ageGroup: "older"
    }
  ];
  
  // Filtrando categorias por pesquisa
  const filteredCategories = allCategories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Filtrando por grupo etário
  const getFilteredCategoriesByAge = (ageGroup: string) => {
    if (ageGroup === "all") return filteredCategories;
    return filteredCategories.filter(category => 
      category.ageGroup === ageGroup || category.ageGroup === "all"
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Categorias</h1>
      
      {/* Barra de pesquisa */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Pesquisar categorias..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Tabs por idade */}
      <Tabs defaultValue="all">
        <TabsList className="mb-8">
          <TabsTrigger value="all">Todas as idades</TabsTrigger>
          <TabsTrigger value="young">3-6 anos</TabsTrigger>
          <TabsTrigger value="older">7-10 anos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {getFilteredCategoriesByAge("all").map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="young">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {getFilteredCategoriesByAge("young").map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="older">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {getFilteredCategoriesByAge("older").map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Categories;
