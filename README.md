# API y Carrito de Compras - Prueba Técnica

Este proyecto es una solución completa para un carrito de compras con selección de la mejor combinación de productos según presupuesto, desarrollada con **Next.js**, utilizando **App Router** y tecnologías modernas de frontend y backend unificados.

## Tecnologías y Librerías Utilizadas

- **Next.js (App Router)** – Framework React fullstack, usado tanto para el frontend como para exponer las APIs.
- **TypeScript** – Tipado estático para mayor seguridad y mantenimiento del código.
- **Tailwind CSS** – Librería de estilos utilitaria para diseño responsivo moderno.
- **Framer Motion** – Animaciones suaves y reactivas para mejorar la experiencia de usuario.
- **Heroicons** – Íconos SVG escalables, usados en la UI.
- **Context API** – Para manejar el estado global del carrito de compras.

## Estructura General de la Aplicación

1. **Backend**  
   - Las rutas `/api/products` y `/api/cart` están integradas dentro del mismo proyecto con **API Routes** de Next.js.  
   - El estado del carrito se mantiene en memoria (con `useContext`), simulado como si fuera backend.

2. **Frontend**  
   - El sitio está compuesto por múltiples páginas (`Home`, `Carrito`, `Mejor Combinación`) con diseño responsive.
   - Componentes clave:
     - `ProductCard`: Tarjeta visual para cada producto con animaciones.
     - `CartList`: Lista del carrito renderizada dinámicamente.
     - `BudgetForm`: Formulario para ingresar presupuesto.

3. **Algoritmo de combinación óptima**  
   - La funcionalidad para encontrar la mejor combinación de productos se resolvió utilizando el algoritmo de **la mochila 0/1 (Knapsack Problem)**.  
   - Se implementó en `lib/findBestCombination.ts` mediante **programación dinámica** para seleccionar los productos que maximizan el total sin exceder el presupuesto.

## Cómo instalar y ejecutar el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador

## Despliegue

Aplicación desplegada en: [App Web en Vercel](https://prueba-tecnica-api-y-carrito-de-com.vercel.app/)


## Autor

**Valentín Mathey** – [LinkedIn](https://www.linkedin.com/in/valentin-mathey/)



