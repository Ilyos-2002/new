import { Link, NavLink } from "react-router-dom";
import logo from "./kivi.svg"
import "./Header.css"
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

export function Header() {
    return (
        <header>
            <HeaderTop />
            <HeaderBottom />


        </header>
    )
}