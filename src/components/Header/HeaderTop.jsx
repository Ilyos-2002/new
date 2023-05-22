
import { Link, NavLink } from "react-router-dom";
import logo from "./kivi.svg"
import "./Header.css"



export function HeaderTop() {
    return (
        <div className="container">
            <div className="header__wrapper">
                <div className="header__logo-wrapper">
                    <Link className="header__logo-link">
                        <img className="header__img" src={logo} alt="Logo" />

                    </Link>
                    <p className="header__logo-title">Продай, найди, купи
                        все что пожелаешь…</p>
                </div>
                <nav className="header__nav">
                    <NavLink className="navlink" to={"/"}> Объявления</NavLink>
                    <NavLink className="navlink" to={"/s"}>  Магазины</NavLink>
                    <NavLink className="navlink" to={"/s"}> Для бизнеса</NavLink>
                    <NavLink className="navlink" to={"/s"}> Помощь
                    </NavLink>

                </nav>

                <div className="header__btn__wrapper">
                    <button className="header__btn extrabtn ">Рус</button>
                    <button className="header__btn"> O’z</button>
                    <div className="select"></div>
                </div>

                <div className="header__log__wrapper">
                    <Link className="header__log extra">
                        Вход
                    </Link>
                    <Link className="header__log">
                        Регистрация
                    </Link>
                </div>
            </div>
        </div>
    )
}