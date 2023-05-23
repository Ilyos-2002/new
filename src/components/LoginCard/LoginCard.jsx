import React from 'react'
import "./LoginCard.css"
import { Link } from 'react-router-dom'
import bg from "./loginbg.png"

export default function () {
    return (
        <section>

            <div className="container classlogin">
                <div>

                    <form className='classlogins' >

                        <h1 className='login__title'>Логин</h1>
                        <label >
                            <h4 className=' label'>

                                Введите email или номер телефона
                            </h4>
                            <input className='input' pattern='1-9' placeholder='99891 167 27 23' type="text" />
                        </label>
                        <label>
                            <h4 className='label'>

                                Пароль
                            </h4>
                            <input className='input' placeholder='***********' type="password" />
                        </label>
                        <button className='login__btn'>Войти</button>


                    </form>
                    <div className='login__div'>
                        <p className='login_ili'>или</p>
                        <Link className='login__link'>Восстоновить ваше пароль</Link>

                    </div>


                </div>
                <div className='bg'>
                    <div className='login__content'>
                        <img src="" alt="" />
                        <p className='text__login'>Откройте для себя
                            целую плошадку
                            для продаже</p>
                        <Link className='login__content_link'>Как это делать?</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}
