import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router'
import { GetGuajalotasById } from '../Selectors/GetGuajalotasById'
import { ButtonCounter } from './ButtonCounter'
import Taste from './Taste'
import ButtonAddCart from './ButtonAddCart'

const GuajalotasDetail = () => {

    const [inf, setInf] = useState([])

    const { eleId } = useParams();

    useEffect(() => {
        GetGuajalotasById(eleId).then((data) => { setInf(data) })
    }, [])

    if (!eleId) {
        return <Redirect to="/" />
    }

    const {
        title,
        id,
        price,
        image,
        taste,
        type
    } = inf




    return (
        <div className="container-fluid">
            <div>
                <img src={image} alt={title} className="rounded mx-auto d-block my-2" />
            </div>
            <div>
                <h3 className="text-center">{title}</h3>
            </div>
            <div>
                <h4 className="text-center my-2">${price}MXN</h4>
            </div>
            <ButtonCounter />
            <Taste ele={taste} />
            <ButtonAddCart id={id} />
        </div>
    )
}

export default GuajalotasDetail
