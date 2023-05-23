import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function ProductCard({ userData }) {
    const [loading, setLoading] = useState(true)
    const [foundUser, setFoundUser] = useState([])
    let { userId } = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${userId}`)
            .then((json => {
                console.log(json)
                setLoading(false); setFoundUser(json)
            }))
    })
    console.log(foundUser, userId);
    return (
        <section>

            <div className="container">

                <h3 className='product__title'>
                    Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5
                </h3>
                <div className='divs'>
                    <div className='img__list'>
                        <div className='img__wrapper' >
                            <img src="https://picsum.photos/95/95" width={95} height={95} alt="" />
                            <img src="https://picsum.photos/95/95" width={95} height={95} alt="" />
                            <img src="https://picsum.photos/95/95" width={95} height={95} alt="" />
                            <img src="https://picsum.photos/95/95" width={95} height={95} alt="" />
                        </div>
                        <div>
                            <img src="https://picsum.photos/461/420" alt="" />
                        </div>

                    </div>
                    <div>
                        <div>
                            <pre className='dobav'>Артикул: 4418970             обновлено: 28.04.17 добавлено: 28.04.17 </pre>
                            <p className='price'>70 000 у.е.</p>
                            <p className='place'>Ташкент, Ташкентская область, Юнусабадский район </p>

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
                                Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый.

                                Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
                            </p>
                            <div className='wrp'> <p className='bootom'>Просмотры:10958</p>

                                <p className='bottom'> Пожаловатся</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
