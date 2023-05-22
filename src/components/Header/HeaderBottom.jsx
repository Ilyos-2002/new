


export function HeaderBottom() {
    return (
        <div className="container">
            <div className="header__bottom__wrapper">
                <div className="">
                    <form className="header__bottom__main">
                        <select className="header__select extra__select" name="" id="">
                            <option className="options" value="">Любая категория</option>
                            <option className="options" value="">Любая категория</option>
                            <option className="options" value="">Любая категория</option>
                        </select>
                        <label className="header__select extra__select header__label" name="" id="">
                            <input className="header__input" type="text" placeholder="Что будем искать ?" />
                        </label>
                        <select className="header__select" name="" id="">
                            <option className="options" value="">
                                По всей Узбекистану
                            </option>
                            <option className="options" value="">
                                По всей Узбекистану
                            </option>
                            <option className="options" value="">
                                По всей Узбекистану
                            </option>
                            <option className="options" value="">
                                По всей Узбекистану
                            </option>
                        </select>
                        <button className="form__btn">Найти</button>
                    </form>
                </div>
                <div className="header__bottom__extra">
                    <p className="header__extra__text">+</p>
                    <p className="header__extra__content">Добавить обьявления</p>
                </div>

            </div>

        </div>
    )
}