"use client";

import Link from "next/link";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-white opacity-80 font-light text-right">
          By Valentin Mathey
        </p>

        <div className="flex gap-6 text-lg sm:text-xl font-semibold text-center">
          <Link href="/" className="hover:underline">
            Productos
          </Link>
          <Link href="/best-combination" className="hover:underline">
            Mejor combinación
          </Link>
        </div>

        <Link
          href="/cart"
          className="flex items-center gap-2 text-sm sm:text-base hover:underline"
        >
          <ShoppingCartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="font-medium">Carrito ({cart.length})</span>
        </Link>
      </div>
    </div>
  );
}
