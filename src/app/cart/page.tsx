"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import CartList from "@/components/CartList";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Tu Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">No hay productos en el carrito.</p>
      ) : (
        <>
          <CartList items={cart} />

          <div className="text-right">
            <p className="text-lg font-semibold">
              Total: <span className="text-blue-700">${total}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
