import { Link } from "react-router-dom";


export function FooterBottom() {
    return (
        <div className="footer__bottom">
            <div className="container">
                <ul className="footer__bottom-list">
                    <li>
                        <Link className="footer__link"> Подать объявление
                        </Link>

                    </li>
                    <li> <Link className="footer__link">Объявления
                    </Link></li>
                    <li> <Link className="footer__link"> Магазины
                    </Link></li>
                    <li> <Link className="footer__link"> Помощь
                    </Link></li>
                    <li> <Link className="footer__link"> Безопасность
                    </Link></li>
                    <li> <Link className="footer__link">Реклама на сайте
                    </Link></li>
                    <li> <Link className="footer__link"> О компании
                    </Link></li>
                </ul>

            </div>
        </div>
    )
}