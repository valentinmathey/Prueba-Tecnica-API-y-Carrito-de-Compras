"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";
import { findBestCombination } from "@/lib/findBestCombination";
import BudgetForm from "@/components/BudgetForm";

export default function BestCombinationPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [confirmedBudget, setConfirmedBudget] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericBudget = parseInt(budget);
    if (!isNaN(numericBudget)) {
      const combo = findBestCombination(products, numericBudget);
      setConfirmedBudget(numericBudget);
      setResult(combo);
    }
  };

  const total = result.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        Mejor combinación de productos
      </h1>

      <BudgetForm
        budget={budget}
        setBudget={setBudget}
        onSubmit={handleSubmit}
      />

      {confirmedBudget !== null && (
        <>
          {result.length === 0 ? (
            <p className="text-center text-red-600 text-lg font-medium mt-6">
              No se encontraron productos dentro de tu presupuesto.
            </p>
          ) : (
            <>
              <ul className="divide-y border rounded-xl shadow mb-4">
                {result.map((item) => (
                  <li
                    key={item.id}
                    className="p-4 flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span className="text-sm text-gray-600">${item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex justify-end">
                <div className="text-black text-lg font-semibold space-y-1 text-right">
                  <div className="flex justify-between gap-4 min-w-[320px]">
                    <span>Presupuesto ingresado:</span>
                    <span>${confirmedBudget}</span>
                  </div>
                  <div className="flex justify-between gap-4 min-w-[320px]">
                    <span>Total de la mejor combinación:</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
