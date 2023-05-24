import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header, HeaderBsiz } from '../Header';


export default function ProductCard({ userData }) {
    const [loading, setLoading] = useState(true)
    const [foundUser, setFoundUser] = useState([])
    let { userId } = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${userId}`)
            .then((json => {
                setLoading(false); setFoundUser(json.data)
            }))
    })
    console.log(foundUser);

    return (
        <>
            <Header />
            {

                foundUser && <section>

                    <div className="container">

                        <h3 className='product__title'>
                            Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5
                        </h3>
                        <div className='divs'>
                            <div className='img__list'>
                                <div className='img__wrapper' >
                                    <img src={foundUser.image} width={95} height={95} alt="" />
                                    <img src={foundUser.image} width={95} height={95} alt="" />
                                    <img src={foundUser.image} width={95} height={95} alt="" />
                                    <img src={foundUser.image} width={95} height={95} alt="" />
                                </div>
                                <div>
                                    <img src={foundUser.image} width={461} height={420} alt="" />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <pre className='dobav'>Артикул: 4418970             обновлено: 28.04.17 добавлено: 28.04.17 </pre>
                                    <p className='price'>{foundUser.price}у.е.</p>
                                    <p style={{ textTransform: "uppercase" }} className='place'>{foundUser.category} </p>

                                    <div className='wrap_number'>
                                        <p className='wrap_numbers'>99891 166 ****</p>
                                        <p className='Wrappp'>Покозать польностю</p>
                                    </div>
                                    <div className='wrap_number'>
                                        <p className='wrap_numbers'>99891 166 ****</p>
                                        <p className='Wrappp'>Покозать польностю</p>
                                    </div>
                                    <div className='autor__wrapper'>
                                        <p className='autor__text'>Автор обьявлении: </p>
                                        <h4 className='autor'>Зухриддин Темиров</h4>
                                    </div>
                                    <div>
                                        <button className='btn1'>Написать автору</button>
                                        <button className='btn2'>Предложить свою цену</button>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Количество комнат:6
                                                </td>
                                                <td>
                                                    Общая площадь:40 м2
                                                </td>
                                                <td>
                                                    Этаж:32
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Количество комнат:Раздельная                                     </td>
                                                <td>
                                                    Общая площадь:Сдача в 2017
                                                </td>
                                                <td>
                                                    Этаж:Авторский проект                                      </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Санузел :2 санузла и более                           </td>
                                                <td>
                                                    Меблирована :Да                                 </td>
                                                <td>
                                                    Высота потолков :32                                  </td>
                                            </tr>


                                        </tbody>
                                    </table>

                                    <p className='text'>
                                        Рядом есть:Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе
                                    </p>
                                    <p className='long__text'>
                                        {foundUser.description}  </p>
                                    <div className='wrp'> <p className='bootom'>Просмотры:{foundUser.rating.count}</p>

                                        <p className='bottom'> Rate: {foundUser.rating.rate}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>
            }</>
    )
}
