import Products from "@/components/home/Products";
import React from "react";


export const metadata = {
  title: "All Products",
  description:
    "Browse all premium educational toys from Hero Kidz. Safe, fun and designed for learning.",
  openGraph: {
    title: "Hero Kidz Products",
    description:
      "Explore our full range of educational and fun toys for kids.",
    images: [
      {
        url: "https://ibb.co.com/xtHLZTTM", // product page preview
        width: 1200,
        height: 630,
        alt: "Hero Kidz Products Page",
      },
    ],
  },
};



const ProductsPage = () => {
  return (
    <div>
      <Products></Products>
    </div>
  );
};

export default ProductsPage;