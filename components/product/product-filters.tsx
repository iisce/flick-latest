import { useState, useEffect } from "react";

interface Props {
     products: Product[];
     selectedFilters: string[];
     onFilterChange: (filters: string[]) => void;
}

export default function ProductFilters({
     products,
     selectedFilters,
     onFilterChange,
}: Props) {
     const [categories, setCategories] = useState<string[]>([]);

     useEffect(() => {
          const categorySet = new Set<string>();
          products.forEach((product) => {
               product.categories.forEach((category) => {
                    categorySet.add(category);
               });
          });
          setCategories(Array.from(categorySet));
     }, [products]);

     const handleFilterChange = (category: string) => {
          onFilterChange([category]);
     };

     const handleFilterRemove = (filter: string) => {
          onFilterChange(selectedFilters.filter((f) => f !== filter));
     };

     return (
          <div className="text-sm">
               <h2 className="px-3 py-3">FILTERS</h2>
               <div className={"filterList border-b border-t"}>
                    {categories.map((category) => (
                         <div
                              key={category}
                              className={`${"cursor-pointer p-2 uppercase filter"} ${
                                   selectedFilters.includes(category)
                                        ? "bg-primary text-secondary"
                                        : ""
                              }`}
                              onClick={() => handleFilterChange(category)}
                         >
                              {category}
                         </div>
                    ))}
               </div>
               <div className="my-3">
                    {selectedFilters.map((filter) => (
                         <span
                              key={filter}
                              className="mx-1 my-1 cursor-pointer rounded px-2"
                              onClick={() => handleFilterRemove(filter)}
                         >
                              CLEAR ALL
                         </span>
                    ))}
               </div>
          </div>
     );
}
