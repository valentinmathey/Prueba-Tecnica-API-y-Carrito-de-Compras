"use client";

import { Product } from "@/types";
import { motion } from "framer-motion";

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all h-full"
    >
      <div className="flex-1">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
          {product.name}
        </h2>
        <p className="text-sm sm:text-base text-gray-500">${product.price}</p>
      </div>
      <button
        onClick={() => onAdd(product)}
        className="mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-3 py-2 sm:px-4 sm:py-2 rounded-xl transition w-full"
      >
        Agregar al carrito
      </button>
    </motion.li>
  );
}
