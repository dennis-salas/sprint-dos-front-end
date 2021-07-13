import React from 'react'

const Cart = ({ cart, setCart }) => {
    return (
        <div>
            {
                cart.length === 0
                    ?
                    (<p>No hay elementos</p>)
                    :
                    (
                        cart.map(ele => (

                            <div className="container fluid">
                                <div className="card mb-3 rounded" style={{ maxwidth: 100 }}>
                                    <div className="row g-0 row align-items-center">
                                        <div className="col-md-4 col-xs-6">
                                            <img src={ele.image} className="img-fluid w-50" alt={ele.title} />
                                        </div>
                                        <div className="col-md-8 col-xs-6">
                                            <div className="card-body">
                                                <div className="text-decoration-none" to={`/Guajalotas/${ele.id}`}>
                                                    <h5 className="card-title">{ele.title}</h5>
                                                    <p className="card-text">${ele.price} MXN</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
            }

        </div>
    )
}
export default Cart
