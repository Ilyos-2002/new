import Logo from "./kivi.svg"
import Aplle from "./apple.svg"
import Play from "./play.svg"
import { Link } from "react-router-dom"
import "./Footer.css";

export function FooterTop() {
    return (
        <div className="footerTop">
            <div className="container contentt  ">
                <div className="logo__content">
                    <Link to={"/"} className="Link">
                        <img className="logo" src={Logo} alt="logo" width={42} height={22} />
                    </Link>
                    <p className="logo__text">Продай, найди, купи
                        все что ты пожелаешь </p>
                </div>
                <div>
                    <p className="text__middle">
                        Веб сайт бесплатных обьявлений | на базе
                        имеется 234 944 999 шт обяления
                    </p>

                </div>
                <div className="link__wrapper">
                    <div className="wrapper__content">
                        <img className="img__footer" src={Aplle} alt="Aplle logo" />
                        <div>
                            <p className="wrapper__text">     Aviable on the</p>
                            <h4 className="wrapper__title">Apple Store</h4>
                        </div>
                    </div>
                    <div className="wrapper__content">
                        <img className="img__footer" src={Play} alt="Google play logo" />
                        <div>
                            <p className="wrapper__text">     Android App on </p>
                            <h4 className="wrapper__title">Google Play</h4>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}