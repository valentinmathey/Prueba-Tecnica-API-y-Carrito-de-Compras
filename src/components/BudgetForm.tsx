"use client";

import { FormEvent } from "react";

type Props = {
  budget: string;
  setBudget: (val: string) => void;
  onSubmit: (e: FormEvent) => void;
};

export default function BudgetForm({ budget, setBudget, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Ingresa tu presupuesto
      </label>
      <div className="flex gap-4 flex-wrap">
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Ej: 150"
          className="border px-4 py-2 rounded w-full sm:max-w-xs"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Calcular
        </button>
      </div>
    </form>
  );
}
