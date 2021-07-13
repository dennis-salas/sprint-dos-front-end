import React, { useState, useEffect } from 'react'

const Taste = ({ ele }) => {

    const [sabor, setSabor] = useState({})

    useEffect(() => {
        getSabor();
    }, []);


    const getSabor = async () => {
        const url = 'http://localhost:3004/guajalotas';
        const res = await fetch(url);
        const data = await res.json();
        setSabor(data);
    }

    return (
        <div className="row">
            <div className="col-4">
                <img src={ele} alt={ele} className="img-fluid w-50" />
            </div>
        </div >
    )
}

export default Taste
