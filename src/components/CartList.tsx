import { Product } from "@/types";

type Props = {
  items: Product[];
};

export default function CartList({ items }: Props) {
  return (
    <ul className="divide-y border rounded-xl shadow mb-4">
      {items.map((item, index) => (
        <li key={index} className="p-4 flex justify-between items-center">
          <span>{item.name}</span>
          <span className="text-sm text-gray-600">${item.price}</span>
        </li>
      ))}
    </ul>
  );
}
