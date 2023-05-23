import React from 'react'
import "./ProductCard.css"

export default function ProductCard() {
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
                                <p>Покозать польностю</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
