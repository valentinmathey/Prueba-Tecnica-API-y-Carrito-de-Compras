import { Product } from '@/types';

/*
 * Algoritmo de la Mochila 0/1 (Knapsack 0/1)
*/

export function findBestCombination(products: Product[], budget: number): Product[] {
  const n = products.length;

  // dp[i][j] = valor máximo usando los primeros i productos con presupuesto j
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(budget + 1).fill(0)
  );

  // Rellenar la tabla DP
  for (let i = 1; i <= n; i++) {
    const { price } = products[i - 1];
    for (let j = 0; j <= budget; j++) {
      if (price > j) {
        dp[i][j] = dp[i - 1][j]; // no lo puedo incluir
      } else {
        // el máximo entre no incluirlo o incluirlo
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - price] + price);
      }
    }
  }

  // Reconstruir la mejor combinación
  const result: Product[] = [];
  let i = n;
  let j = budget;

  while (i > 0 && j >= 0) {
    if (dp[i][j] !== dp[i - 1][j]) {
      const product = products[i - 1];
      result.push(product);
      j -= product.price;
    }
    i--;
  }

  return result.reverse(); 
}
