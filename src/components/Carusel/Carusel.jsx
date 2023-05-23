import React from 'react'

import logos from "./Shape.svg"
import "./Carusel.css"

function Carusel() {
    return (
        <section>
            <div className="container">
                <ul className='carusel__list'>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'>Автомобили</p>
                    </li>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'> Недвижимость</p>
                    </li>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'> Электроника</p>
                    </li>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'> Работа</p>
                    </li>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'>Личные вещи</p>
                    </li>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'>Автом  Садобили</p>
                    </li>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'>Стройка и ремонт</p>
                    </li>

                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'> Хобби и Спорт</p>
                    </li>
                    <li>
                        <div className='carusel__div'>
                            <img src={logos} alt="" />

                        </div>
                        <p className='carusel__text'>Автомобили</p>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default Carusel