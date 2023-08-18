
import { useEffect, useState } from 'react'
// import './App.css'
import Footer from '/src/components/Footer'
import NewsLetter from '/src/components/NewsLetter'
import { Products } from '/src/components/Products'
import { Banner } from '/src/components/Banner'
import Cabecalho from '/src/components/Cabecalho'
import { Categories } from '/src/components/Categories'
import { Facilities } from '../../components/Facilities'

function Home() {

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

    if (meteoraDB) {
        return (
            <div className='app-wrapper'>
                <Cabecalho filterProductsInput={filterProductsInput} />
                <Banner />
                <Categories
                    meteoraDB={categoryList}
                    filterHandler={filterHandler}
                    selectedCategoryHandler={selectedCategoryHandler}
                />
                <Products meteoraDB={productList} />
                <Facilities />
                <NewsLetter />

            </div>
        )
    }



}

export default Home
