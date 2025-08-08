import { products } from "@/lib/products";
import { NextRequest, NextResponse } from "next/server";

const cart: typeof products = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(req: NextRequest) {
  const { productId } = await req.json();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json(
      { error: "Producto no encontrado" },
      { status: 404 }
    );
  }

  cart.push(product);
  return NextResponse.json(cart);
}
