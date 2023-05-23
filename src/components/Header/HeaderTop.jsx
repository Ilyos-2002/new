
import { Link, NavLink } from "react-router-dom";
import logo from "./kivi.svg"
import "./Header.css"
import { useTranslation } from "react-i18next";



export function HeaderTop() {
    const handCLick = (evt) => {
        evt.preventDeafault()
        console.log(evt);
    }

    const { t, i18n } = useTranslation();
    const changeLang = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <div className="container">
            <div className="header__wrapper">
                <div className="header__logo-wrapper">
                    <Link className="header__logo-link">
                        <img className="header__img" src={logo} alt="Logo" />

                    </Link>
                    <p className="header__logo-title">{t("header_logo")}</p>
                </div>
                <nav className="header__nav">
                    <NavLink className="navlink" to={"/pruducts"}> Объявления</NavLink>
                    <NavLink className="navlink" to={"/add-product"}>  Магазины</NavLink>
                    <NavLink className="navlink" to={"/s"}> Для бизнеса</NavLink>
                    <NavLink className="navlink" to={"/s"}> Помощь
                    </NavLink>

                </nav>

                <div className="header__btn__wrapper">
                    <button onClick={() => { "ru" }} className="header__btn extrabtn ">Рус</button>
                    <button onClick={() => { "uz" }} className="header__btn"> O’z</button>
                    <div className="select"></div>
                </div>

                <div className="header__log__wrapper">
                    <Link to={"/login"} className="header__log extra">
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