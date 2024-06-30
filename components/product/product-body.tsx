"use client";

import ProductListing from "@/components/product/ProductListing";
import { useEffect, useState } from "react";
import ProductFilters from "./product-filters";
import { ALL_PRODUCTS } from "@/consts";

export default function ProductBody() {
     const [products, setProducts] = useState<Product[]>(ALL_PRODUCTS);
     const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
     const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

     useEffect(() => {
          const filteredList = products.filter((product) =>
               selectedFilters.every((filter) =>
                    product.categories.includes(filter),
               ),
          );
          setFilteredProducts(filteredList);
     }, [selectedFilters, products]);
     const handleFilterChange = (filters: string[]) => {
          setSelectedFilters(filters);
     };
     return (
          <div className="grid gap-5 border-t md:grid-cols-5">
               <div className="border-r">
                    <ProductFilters
                         products={products}
                         selectedFilters={selectedFilters}
                         onFilterChange={handleFilterChange}
                    />
               </div>
               <div className="mt-6 grid w-full grid-cols-1 gap-5 gap-x-6 sm:grid-cols-2 md:col-span-4 lg:grid-cols-3">
                    {filteredProducts.map((product, i) => (
                         <ProductListing
                              key={`product-${i}`}
                              product={product}
                              index={i}
                         />
                    ))}
               </div>
          </div>
     );
}
