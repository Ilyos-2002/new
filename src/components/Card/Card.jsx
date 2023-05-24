import axios from "axios"
import "./Card.css"
import { useSelector } from "react-redux"
import React from "react"
import { Link } from "react-router-dom"


export function Card() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setData(res.data);
            })
    }, [])







    return (
        <div className="container">




            <ul className="card__wrapper">

                {
                    data && data.map((item, index) =>
                        <Link to={`/product/${item.id}`}>
                            <li key={index} className="card">
                                <img src={item.image} width={262} height={207} alt="img" />
                                <div className="content">
                                    <h3 className="card__title">{item.title}</h3>
                                    <p className="card__time">
                                        Rate: {item.rating.rate} |  Count: {item.rating.count}
                                    </p>
                                    <h4>{item.price} $</h4>

                                </div>
                            </li>
                        </Link>

                    )
                }
            </ul>

        </div>
    )
}