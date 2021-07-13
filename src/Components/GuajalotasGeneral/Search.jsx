import React, { useState, useEffect } from 'react'

const Search = () => {

    const [food, setFood] = useState([]);

    const [input, setInput] = useState("");

    useEffect(() => {
        getFood().then(results => { setFood(results) })
    }, [])

    const getFood = async (value = '') => {
        const url = 'http://localhost:3004/guajalotas';
        const res = await fetch(url);
        const data = await res.json();
        const results = data;

        if (value !== '') {
            return results.filter((ele) => ele.title.toLowerCase().includes(value));
        } else {
            return results;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = input.toLowerCase();
        getFood(value).then(results => { setFood(results) })
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <form className="Form"
                onSubmit={handleSubmit}
            >
                <div className="row mx-2">
                    <div className="col-8">
                        <input className="rounded-pill"
                            type="text"
                            placeholder="Guajalotas,Bebidas,Tamales"
                            name="search"
                            value={input}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </form>
            {
                food.map(ele => (
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
            }
        </div >
    )
}

export default Search
