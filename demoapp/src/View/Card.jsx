import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

function Card() {
    const [cardData, setCardData] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((data) => data)
            .then((Response) => setCardData(Response.data))
            .catch(() => console.log("data not "))
    }, [])
    const initialstate = cardData
    let reducer = (state, action) => {
        switch (action.type) {
            case "all": {
                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(json => setCardData(json))
            }
                break;
            case "Jewelery": {
                fetch('https://fakestoreapi.com/products/category/jewelery')
                    .then(res => res.json())
                    .then(json => setCardData(json))
            }
                break;
            case "Electronics": {
                fetch('https://fakestoreapi.com/products/category/electronics')
                    .then(res => res.json())
                    .then(json => setCardData(json))
            }
                break;
            case "Men": {
                fetch(`https://fakestoreapi.com/products/category/${"men's clothing"}`)
                    .then(res => res.json())
                    .then(json => setCardData(json))
            }
                break
            default: {
                console.log("error")
            }
        }

    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <div className="row d-flex mt-5 mx-auto ">
                <div className="col-3"><button className='btn btn-dark' onClick={() => dispatch({ type: "all" })}>ALL</button></div>
                <div className="col-3"><button className='btn btn-dark' onClick={() => dispatch({ type: "Jewelery" })}>Jewelery</button></div>
                <div className="col-3"><button className='btn btn-dark' onClick={() => dispatch({ type: "Electronics" })}>Electronics</button></div>
                <div className="col-3"><button className='btn btn-dark' onClick={() => dispatch({ type: "Men" })}>Men's clothing</button></div>
            </div>
            <div className="row">
                {
                    cardData.map((ele) => (
                        <div className="col-3 mt-5">
                            <div className="card product-cart" style={{ width: '18rem', height: '30rem' }}>
                                <img src={ele.image} className="card-img-top" width={300} height={300} alt="image" />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                    <p className="card-text">{ele.description.slice(0, 80)}</p>
                                </div>
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>
    )
}

export default Card