import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        Lista de Productos
      </h1>
      <ProductList />
    </div>
  );
}
