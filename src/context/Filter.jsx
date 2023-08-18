import { createContext, useContext, useEffect, useState } from "react";

export const FilterContext = createContext();
FilterContext.displayName = "Filter Products";

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState([]);
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [meteoraDB, setMeteoraDB] = useState();


    useEffect(() => {
        awaitData();
    }, []);

    async function awaitData() {
        const url = await fetch('https://my-json-server.typicode.com/Cleber-Severo/Meteora-db/db');
        const data = await url.json();
        setMeteoraDB(data);
        setProductList(data.products);
        setCategoryList(data.categories);
    }

    return (
        <FilterContext.Provider 
            value={{ 
                filter, 
                setFilter, 
                meteoraDB, 
                setMeteoraDB,
                productList,
                setProductList,
                categoryList,
                setCategoryList }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {

    const { 
            meteoraDB, 
            setMeteoraDB, 
            productList,
            setProductList,
            categoryList,
            setCategoryList
        } = useContext(FilterContext);

    function filterHandler(category, reset = false) {
        if (reset) {
            setProductList(meteoraDB.products)
            return;
        }

        let newList = meteoraDB.products.filter(product => (product.category == category));
        setProductList(newList)
        newList = [];
    }

    function filterProductsInput(value) {
        setProductList(meteoraDB.products);

        let filteredProductList = [];
        if (value === '') {
            awaitData();
            return;
        }

        for (var i in meteoraDB.products) {
            if (meteoraDB.products[i].title.includes(value)) {
                filteredProductList.push(meteoraDB.products[i]);
            }
        }

        setProductList(filteredProductList);
    }

    function selectedCategoryHandler(title) {
        console.log(categoryList);
        categoryList.forEach((category) => {
            if (category.title !== title) {
                category.selected = false;
                return;
            }
            if (category.title === title && category.selected === true) {
                category.selected = false;
                return;
            }
            category.selected = true;
        })
    }

    return {
        filterHandler,
        filterProductsInput,
        selectedCategoryHandler,
        meteoraDB,
        productList,
        setProductList,
        categoryList,
        setCategoryList
    }

}