import React, { useState, useEffect } from "react";

const GetGuajalotasByCategory = (category) => {

    const validCategory = ['Guajalotas', 'Bebidas', 'Tamales'];

    if (!validCategory.includes(category)) {
        throw new Error(`Categoria ${category} es incorrecto`);
    }

    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        const url = 'http://localhost:3004/guajalotas';
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])


    return product.filter(ele => ele.category === category);

}
export default GetGuajalotasByCategory