import React, { useState, useEffect } from 'react'
import Cart from './Cart'

const ButtonAddCart = ({ id }) => {

    const [cart, setCart] = useState([])
    const [data, setData] = useState([])

    const getData = async () => {
        const url = 'http://localhost:3004/guajalotas';
        const res = await fetch(url);
        const inf = await res.json();
        setData(inf)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleAdd = (id) => {
        const filtro = data.filter((ele) => ele.id === id)
        setCart([...cart, ...filtro])
    }

    const handleRemove = (id) => {
        const remove = cart.filter((ele) => ele.id !== id)
        setCart(remove)

    }


    return (
        <div>
            {data ?
                (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleAdd(id)}
                    >Agregar al Carrito</button>
                )
                :
                (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleRemove(id)}
                    >Eliminar</button>
                )
            }
            {
                <Cart
                    cart={cart}
                    setCart={setCart} />

            }
        </div>

    )
}

export default ButtonAddCart
