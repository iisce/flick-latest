interface Product {
     name: string;
     image: string;
     description: string;
     categories: string[];
}

type Filter = string[];

type ProductFilter = "category1" | "category2" | "category3";

type ProductListData = {
     productList: Product[];
     filterOptions: Filter[];
};
