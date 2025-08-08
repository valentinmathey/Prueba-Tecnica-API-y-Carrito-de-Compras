"use client";

import { useEffect, useState, useContext } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { CartContext } from "@/context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleAdd = (product: Product) => {
    fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id }),
    })
      .then((res) => res.json())
      .then(() => addToCart(product));
  };

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={handleAdd} />
      ))}
    </ul>
  );
}
