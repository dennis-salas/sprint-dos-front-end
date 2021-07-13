import React from 'react'
import { Link } from 'react-router-dom'

const GuajalotasCard = (ele) => {
    return (
        <div className="container fluid">
            <div className="card mb-3 rounded" style={{ maxwidth: 100 }}>
                <div className="row g-0 row align-items-center">
                    <div className="col-md-4 col-xs-6">
                        <img src={ele.image} className="img-fluid w-50" alt={ele.title} />
                    </div>
                    <div className="col-md-8 col-xs-6">
                        <div className="card-body">
                            <Link className="text-decoration-none" to={`/Guajalotas/${ele.id}`}>
                                <h5 className="card-title">{ele.title}</h5>
                                <p className="card-text">${ele.price} MXN</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GuajalotasCard
