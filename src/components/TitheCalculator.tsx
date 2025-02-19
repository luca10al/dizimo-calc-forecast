
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp } from "lucide-react";

interface ProjectionData {
  period: string;
  percentage: number;
  amount: number;
}

const TitheCalculator = () => {
  const [tithers, setTithers] = useState<string>('');
  const [averageAmount, setAverageAmount] = useState<string>('');
  const [monthlyTotal, setMonthlyTotal] = useState<number>(0);
  const [projections, setProjections] = useState<ProjectionData[]>([]);

  const calculateProjections = (baseAmount: number) => {
    const projectionData: ProjectionData[] = [
      { period: "3-6 meses", percentage: 16.25, amount: baseAmount * 1.1625 },
      { period: "6-12 meses", percentage: 34.85, amount: baseAmount * 1.3485 },
      { period: "12-18 meses", percentage: 53.45, amount: baseAmount * 1.5345 }
    ];
    setProjections(projectionData);
  };

  useEffect(() => {
    const numTithers = parseFloat(tithers) || 0;
    const avgAmount = parseFloat(averageAmount) || 0;
    const total = numTithers * avgAmount;
    setMonthlyTotal(total);
    calculateProjections(total);
  }, [tithers, averageAmount]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto p-6 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Calculadora de Dízimo</h1>
        <p className="text-secondary text-lg">Calcule a arrecadação mensal e projeções de crescimento</p>
      </div>

      <Card className="p-6 mb-8 backdrop-blur-sm bg-white/90 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Label htmlFor="tithers">Número de Dizimistas</Label>
            <div className="relative">
              <Input
                id="tithers"
                type="number"
                placeholder="Ex: 100"
                value={tithers}
                onChange={(e) => setTithers(e.target.value)}
                className="pl-10"
                min="0"
              />
              <Calculator className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="average">Valor Médio por Dizimista</Label>
            <div className="relative">
              <Input
                id="average"
                type="number"
                placeholder="Ex: 50,00"
                value={averageAmount}
                onChange={(e) => setAverageAmount(e.target.value)}
                className="pl-10"
                min="0"
                step="0.01"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-primary/5 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Arrecadação Mensal Total</h2>
          <p className="text-3xl font-bold text-primary">{formatCurrency(monthlyTotal)}</p>
        </div>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center mb-6">Projeção de Crescimento com Dizify</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projections.map((projection, index) => (
            <Card key={index} className="p-6 backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-secondary">{projection.period}</span>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">{formatCurrency(projection.amount)}</p>
                <p className="text-sm text-secondary">Aumento de {projection.percentage}%</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitheCalculator;
